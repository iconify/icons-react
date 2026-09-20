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
		"content": `<style>.o88pmhbun {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m-.646 3.646a.5.5 0 1 0-.708.708L9.293 8l-2.647 2.646a.5.5 0 1 0 .708.707l3-3a.5.5 0 0 0 0-.707z");
}
</style><path class="o88pmhbun"/>`,
		"fallback": "fluent:chevron-circle-right-16-filled",
	});
}

export default Component;
