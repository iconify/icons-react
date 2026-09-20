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
		"content": `<style>.a0zql0bio {
  d: path("m18 6 3 3h-3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ifsz0izyq {
  d: path("M12 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.jm17a8avo {
  d: path("m6 18 -3 3");
}

.y-ttebbgy {
  d: path("M6 18c0 -5 4 -8 8 -7 3 1 4 4 2 7Z");
}
</style><g class="hntgybcog"><path class="ifsz0izyq"/><path class="y-ttebbgy"/><path class="a0zql0bio"/><path class="jm17a8avo"/></g>`,
		"fallback": "iconmind:bird-outline-thin",
	});
}

export default Component;
