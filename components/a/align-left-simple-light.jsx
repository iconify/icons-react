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
		"content": `<style>.k2lx9eotb {
  fill: currentColor;
  d: path("M38 56v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0m200 40v64a14 14 0 0 1-14 14H72a14 14 0 0 1-14-14V96a14 14 0 0 1 14-14h152a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H72a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h152a2 2 0 0 0 2-2Z");
}
</style><path class="k2lx9eotb"/>`,
		"fallback": "ph:align-left-simple-light",
	});
}

export default Component;
