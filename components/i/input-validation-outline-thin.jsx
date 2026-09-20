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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iymet_cml {
  d: path("M15.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8l4 -4h3.5");
}

.ji_wj2bhp {
  d: path("m9 9 3 3 3 -3");
}

.rrzohjbez {
  d: path("M12 12v3");
}
</style><g class="hntgybcog"><path class="iymet_cml"/><path class="ji_wj2bhp"/><path class="rrzohjbez"/></g>`,
		"fallback": "iconmind:input-validation-outline-thin",
	});
}

export default Component;
