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

.sdgafkcgw {
  d: path("M4 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.tb325cy_s {
  d: path("M10 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.vw_dl18nv {
  d: path("M12 10.5v3");
}
</style><g class="hntgybcog"><path class="sdgafkcgw"/><path class="tb325cy_s"/><path class="vw_dl18nv"/></g>`,
		"fallback": "iconmind:f1-outline-thin",
	});
}

export default Component;
