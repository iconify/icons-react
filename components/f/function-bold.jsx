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
		"content": `<style>.xfoiffbju {
  fill: currentColor;
  d: path("M212 40a12 12 0 0 1-12 12h-29.29A20 20 0 0 0 151 68.42L142.38 116H184a12 12 0 0 1 0 24h-46l-9.44 51.87A44 44 0 0 1 85.29 228H56a12 12 0 0 1 0-24h29.29A20 20 0 0 0 105 187.58l8.62-47.58H72a12 12 0 0 1 0-24h46l9.44-51.87A44 44 0 0 1 170.71 28H200a12 12 0 0 1 12 12");
}
</style><path class="xfoiffbju"/>`,
		"fallback": "ph:function-bold",
	});
}

export default Component;
