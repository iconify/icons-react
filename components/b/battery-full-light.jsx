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
		"content": `<style>.sm2xncbvr {
  fill: currentColor;
  d: path("M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm-28-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m192 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0");
}
</style><path class="sm2xncbvr"/>`,
		"fallback": "ph:battery-full-light",
	});
}

export default Component;
