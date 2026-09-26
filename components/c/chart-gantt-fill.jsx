import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mjsj_ebfp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L3 19C3 20.1046 3.8954 21 5 21L21 21M7 7L13 7M10 12L16 12M13 17L19 17");
}
</style><path class="mjsj_ebfp"/>`,
		"fallback": "keyline-icons:chart-gantt-fill",
	});
}

export default Component;
