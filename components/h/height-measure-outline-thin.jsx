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
		"content": `<style>.h2-2dgnfu {
  d: path("M12 3v18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rjrs_5bsc {
  d: path("M6 3h12");
}

.tdul-wdwn {
  d: path("m9 6 3 -3 3 3");
}

.vy337188j {
  d: path("m9 18 3 3 3 -3");
}

.xslfg2evh {
  d: path("M6 21h12");
}
</style><g class="hntgybcog"><path class="h2-2dgnfu"/><path class="tdul-wdwn"/><path class="vy337188j"/><path class="rjrs_5bsc"/><path class="xslfg2evh"/></g>`,
		"fallback": "iconmind:height-measure-outline-thin",
	});
}

export default Component;
