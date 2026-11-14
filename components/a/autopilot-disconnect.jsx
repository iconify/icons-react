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
		"content": `<style>.dv2qem2dj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 6.592V4.5l1.5-2l1.5 2V9l7 4v2l-1.993-.427M13.5 17.479V18l2.5 2v1.5l-4-1l-4 1V20l2.5-2v-3.53m-.811-.796L3.5 15v-2l3.534-2.02M3.5 3.5l17 17");
}
</style><path class="dv2qem2dj"/>`,
		"fallback": "uix-sharp:autopilot-disconnect",
	});
}

export default Component;
