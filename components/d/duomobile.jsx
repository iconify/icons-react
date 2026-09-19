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
		"content": `<style>.jmlg4-b1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 18.13h5.87A5.87 5.87 0 0 1 16.24 24v0h0H4.5h0zm0 5.87h11.74v0a5.87 5.87 0 0 1-5.87 5.87H4.5h0zm25.38-5.88v11.74h-5.87V18.12zm-5.88.01v11.75h0a5.87 5.87 0 0 1-5.87-5.87v-5.88zm13.63 0A5.87 5.87 0 0 1 43.5 24v0h0h-11.74h0v0a5.87 5.87 0 0 1 5.87-5.87m0 11.74A5.87 5.87 0 0 1 31.76 24H43.5a5.87 5.87 0 0 1-5.87 5.87");
}
</style><path class="jmlg4-b1x"/>`,
		"fallback": "arcticons:duomobile",
	});
}

export default Component;
