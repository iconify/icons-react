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
		"content": `<style>.em3t3yypy {
  d: path("M2 5a3 3 0 0 1 3 -3h14a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3");
}

.eul_zebdq {
  d: path("m9 3 4 4");
}

.gwnaabclj {
  d: path("M12 9v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rj_0p5bah {
  d: path("M2 18a3 3 0 0 1 3 -3h14a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3");
}
</style><g class="nrj6p8qat"><path class="em3t3yypy"/><path class="eul_zebdq"/><path class="gwnaabclj"/><path class="rj_0p5bah"/></g>`,
		"fallback": "iconmind:cascade-delete-outline-regular",
	});
}

export default Component;
