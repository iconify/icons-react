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
		"content": `<style>.a75-p3jrr {
  d: path("M13.5 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.fsz2pfyxd {
  d: path("m14.5 13 -5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ib3hnj95a {
  d: path("M8.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.o09dvwume {
  d: path("M9.5 9.5V18");
}
</style><g class="hntgybcog"><path class="bn_pu6j-z"/><path class="o09dvwume"/><path class="ib3hnj95a"/><path class="a75-p3jrr"/><path class="fsz2pfyxd"/></g>`,
		"fallback": "iconmind:folder-git-outline-thin",
	});
}

export default Component;
