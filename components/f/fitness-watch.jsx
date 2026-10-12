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

.sp0q8qste {
  d: path("m9.75 6.25l-.5-3.5m5 3.5l.5-3.5m-5 15l-.5 3.5m5-3.5l.5 3.5M12 9.75v4.5");
}

.tttu8w-nu {
  width: 7px;
  height: 11.5px;
  x: 8.5px;
  y: 6.25px;
  rx: 3.5px;
}
</style><g class="hntgybcog"><rect class="tttu8w-nu"/><path class="sp0q8qste"/></g>`,
		"fallback": "iconoven:fitness-watch",
	});
}

export default Component;
