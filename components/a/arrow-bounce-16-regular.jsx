import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vg4geqbgh {
  fill: currentColor;
  d: path("M8 4.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V5.707l6.397 6.397a.5.5 0 0 0 .707 0l5.75-5.75a.5.5 0 0 0-.708-.707L8.75 11.043L2.707 5H7.5a.5.5 0 0 0 .5-.5");
}
</style><path class="vg4geqbgh"/>`,
		"fallback": "fluent:arrow-bounce-16-regular",
	});
}

export default Component;
