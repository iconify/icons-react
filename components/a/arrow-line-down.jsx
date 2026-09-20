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
		"content": `<style>.fc5euxugb {
  fill: currentColor;
  d: path("M50.34 117.66a8 8 0 0 1 11.32-11.32L120 164.69V32a8 8 0 0 1 16 0v132.69l58.34-58.35a8 8 0 0 1 11.32 11.32l-72 72a8 8 0 0 1-11.32 0ZM216 208H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16");
}
</style><path class="fc5euxugb"/>`,
		"fallback": "ph:arrow-line-down",
	});
}

export default Component;
