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
		"content": `<style>.bx3fv3b8c {
  d: path("M12 13v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lyp1l130n {
  fill: currentColor;
  d: path("M8 8a4 5 0 1 1 8 0 4 5 0 1 1 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.njnz25bwe {
  d: path("M8 8a4 5 0 1 1 8 0 4 5 0 1 1 -8 0");
}

.oquq7bbql {
  d: path("M20 17v4");
}

.pmuiqo95v {
  d: path("M2 17h20");
}

.vdy_x0b6n {
  d: path("M4 17v4");
}
</style><g class="hntgybcog"><path class="lyp1l130n"/><path class="njnz25bwe"/><path class="bx3fv3b8c"/><path class="pmuiqo95v"/><path class="vdy_x0b6n"/><path class="oquq7bbql"/></g>`,
		"fallback": "iconmind:dressing-table-duotone-thin",
	});
}

export default Component;
