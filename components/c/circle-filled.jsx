import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n-0e6zbvg {
  fill: currentColor;
  d: path("M16.5 10a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0");
}
</style><path class="n-0e6zbvg"/>`,
		"fallback": "pepicons-pop:circle-filled",
	});
}

export default Component;
