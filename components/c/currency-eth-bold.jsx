import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ico4mvacp {
  fill: currentColor;
  d: path("m225.44 120.59l-88-112a12 12 0 0 0-18.88 0l-88 112a12 12 0 0 0 0 14.82l.6.76a3.7 3.7 0 0 0 .44.56l87 110.68a12 12 0 0 0 18.88 0l88-112a12 12 0 0 0-.04-14.82M140 50.7l57.12 72.7l-57.12 26Zm-24 98.66l-57.12-26L116 50.7Zm0 26.37v29.57l-36.15-46Zm24 0l36.15-16.43l-36.15 46Z");
}
</style><path class="ico4mvacp"/>`,
		"fallback": "ph:currency-eth-bold",
	});
}

export default Component;
