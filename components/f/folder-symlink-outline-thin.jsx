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
		"content": `<style>.a620nromn {
  d: path("m9 17 5 -5");
}

.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.trhc5pjmi {
  d: path("M10.5 11.5h4v4");
}
</style><g class="hntgybcog"><path class="bn_pu6j-z"/><path class="a620nromn"/><path class="trhc5pjmi"/></g>`,
		"fallback": "iconmind:folder-symlink-outline-thin",
	});
}

export default Component;
