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
		"content": `<style>.q_pj_xb0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 18.13h5.87A5.87 5.87 0 0 1 16.24 24H4.5zm0 5.87h11.74a5.87 5.87 0 0 1-5.87 5.87H4.5zm25.38-5.88v11.74h-5.87V18.12zm-5.88.01v11.75a5.87 5.87 0 0 1-5.87-5.87v-5.88zm13.63 0zA5.87 5.87 0 0 1 43.5 24H31.76a5.87 5.87 0 0 1 5.87-5.87m0 11.74zA5.87 5.87 0 0 1 31.76 24H43.5a5.87 5.87 0 0 1-5.87 5.87");
}
</style><path class="q_pj_xb0p"/>`,
		"fallback": "arcticons:duomobile",
	});
}

export default Component;
