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
		"content": `<style>.baxqrnb6h {
  d: path("M13 16H12.5");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j-a1kqp-o {
  d: path("M2 10L22 10");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.j8ay_ac4z {
  stroke-linejoin: round;
  d: path("M19 14V20M17 18L19 20L21 18");
}

.vqfns1bta {
  d: path("M10 16H6");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.vw2m4vleq {
  d: path("M14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12");
}
</style><g class="ipq1z-bjh"><path class="j8ay_ac4z"/><path class="vw2m4vleq"/><path class="vqfns1bta"/><path class="baxqrnb6h"/><path class="j-a1kqp-o"/></g>`,
		"fallback": "solar:card-receive-line-duotone",
	});
}

export default Component;
