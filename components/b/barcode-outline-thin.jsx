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
		"content": `<style>.azgrucbqu {
  d: path("M7 5v14");
}

.btdmtu_xg {
  d: path("M14 5v14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j5yfc7b4j {
  d: path("M11 5v14");
}

.nkim8cbjd {
  d: path("M4 5v14");
}

.vckqcjbbb {
  d: path("M18 5v14");
}
</style><g class="hntgybcog"><path class="nkim8cbjd"/><path class="azgrucbqu"/><path class="j5yfc7b4j"/><path class="btdmtu_xg"/><path class="vckqcjbbb"/></g>`,
		"fallback": "iconmind:barcode-outline-thin",
	});
}

export default Component;
