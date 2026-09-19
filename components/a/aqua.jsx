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
		"content": `<style>.atu4i7pnh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.502 40.068L42.5 29.784L24 7.932L5.5 29.784l10.998 10.284z");
}

.rkghxybjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.316 28.642c0-3.94-7.135-14.14-7.135-14.14s-7.136 10.2-7.136 14.14a7.136 7.136 0 0 0 14.27 0");
}
</style><path class="atu4i7pnh"/><path class="rkghxybjr"/>`,
		"fallback": "arcticons:aqua",
	});
}

export default Component;
