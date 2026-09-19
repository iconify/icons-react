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
		"content": `<style>.gc-90m01k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 36.5V27L24 34l15.5-7v9.5M8.5 27L24 20l15.5 7");
}

.sxa40hpbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.504 7.914l6.159 4.25l7.297-1.646");
}

.wpevqkl-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 22.291l-10.362 4.71L24 31.71L34.362 27zM24 34v9.5M13.638 27V4.5M34.362 27V4.5m-16.195 9.511l6.159 4.251l7.297-1.646l1.337-6.097l-6.159-4.252l-7.296 1.647zm7.496-1.846l-1.337 6.097");
}
</style><path class="gc-90m01k"/><path class="wpevqkl-e"/><path class="sxa40hpbg"/>`,
		"fallback": "arcticons:bluk",
	});
}

export default Component;
