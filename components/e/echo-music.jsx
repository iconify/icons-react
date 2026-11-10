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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mfyx1kjts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.16 11.061v16.507c0 2.15-1.352 5.45-4.945 5.45c-2.639 0-4.044-1.589-4.044-3.58S20.943 24 24.706 24c2.795 0 3.454 1.662 3.454 1.662");
}

.sb_g_43oz {
  cx: 24px;
  cy: 24px;
  r: 13.402px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="sb_g_43oz"/><path class="mfyx1kjts"/>`,
		"fallback": "arcticons:echo-music",
	});
}

export default Component;
