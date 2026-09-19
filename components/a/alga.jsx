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
		"content": `<style>.r5mxm_04g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.485 29.943v-12.11m0 7.626A4.5 4.5 0 0 1 24 29.943h0a4.5 4.5 0 0 1-4.485-4.486v-2.915A4.5 4.5 0 0 1 24 18.058h0a4.5 4.5 0 0 1 4.485 4.485m-13.977-8.748L4.5 23.804l10.402 10.402m18.59-20.412L43.5 23.803L33.098 34.205");
}
</style><path class="r5mxm_04g"/>`,
		"fallback": "arcticons:alga",
	});
}

export default Component;
