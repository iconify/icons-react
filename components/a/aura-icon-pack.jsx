import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qme93kb_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 42.5V24c0-10.217-8.283-18.5-18.5-18.5S5.5 13.783 5.5 24S13.783 42.5 24 42.5c6.014 0 11.358-2.87 14.737-7.314");
}
</style><path class="qme93kb_o"/>`,
		"fallback": "arcticons:aura-icon-pack",
	});
}

export default Component;
