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
		"content": `<style>.kl3-pi6vi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.75 21.69a6.07 6.07 0 0 0-6.05-6.05a6.07 6.07 0 0 0-6.051 6.05v3.934a6.07 6.07 0 0 0 6.05 6.05a6.07 6.07 0 0 0 6.051-6.05m-.002 6.049V7.47");
}

.yd-db6b4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.224 11.212L41.776 5.5v37L6.224 35.83Z");
}
</style><path class="yd-db6b4y"/><path class="kl3-pi6vi"/>`,
		"fallback": "arcticons:descomplica-faculdade-digital",
	});
}

export default Component;
