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
		"content": `<style>.mri6o_hnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.25 13.75h-20.5L24 24l10.25-10.25zm-20.5 20.5h20.5L24 24L13.75 34.25zm20.5-20.5v20.5L44.5 24L34.25 13.75zm-20.5 20.5v-20.5L3.5 24l10.25 10.25zm9.498 3l-1.325 4.001l-1.325-4.001m4.152 4v-4l2.65 4v-4");
}
</style><path class="mri6o_hnk"/>`,
		"fallback": "arcticons:hsbc-vietnam",
	});
}

export default Component;
