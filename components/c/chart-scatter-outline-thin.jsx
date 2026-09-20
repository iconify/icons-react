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
		"content": `<style>.a6m5kfb7k {
  d: path("M18 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.cg4ywvb4m {
  d: path("M12 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.ynh89jb5g {
  d: path("M7 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="ynh89jb5g"/><path class="cg4ywvb4m"/><path class="a6m5kfb7k"/></g>`,
		"fallback": "iconmind:chart-scatter-outline-thin",
	});
}

export default Component;
