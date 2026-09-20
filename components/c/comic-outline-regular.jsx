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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p_6dl25_i {
  d: path("M5 6h5v5H7.5L5 13.5V11Z");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.rzfubwb2e {
  d: path("M12 12h10");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="vyks9vbfn"/><path class="r7xk8o29f"/><path class="rzfubwb2e"/><path class="p_6dl25_i"/></g>`,
		"fallback": "iconmind:comic-outline-regular",
	});
}

export default Component;
