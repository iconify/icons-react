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
		"content": `<style>.nf_vypb5r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 20.261l14.598 11.987M4.746 40.806l17.687-10.518a2.59 2.59 0 0 1 3.07-.032L43.5 40.806m0-20.48L28.668 32.112M21.09 21.704a2.983 2.983 0 0 1 2.974-2.974a2.983 2.983 0 0 1 2.974 2.974v1.934a2.983 2.983 0 0 1-2.974 2.974a2.983 2.983 0 0 1-2.974-2.975m0 2.974V14.714M4.5 20.424h15.058m23.942 0H29.126");
}

.xl5zpfxro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.816 6.216c5.75 4.358 18.683 14.11 18.683 14.11v21.72H4.5V20.26L22.628 6.379a1.98 1.98 0 0 1 2.188-.163");
}
</style><path class="xl5zpfxro"/><path class="nf_vypb5r"/>`,
		"fallback": "arcticons:bluemail",
	});
}

export default Component;
