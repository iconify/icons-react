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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z9eky33_w {
  d: path("M8.5 17v-2.5l5 -5L16 12l-5 5Z");
}
</style><g class="hntgybcog"><path class="bn_pu6j-z"/><path class="z9eky33_w"/></g>`,
		"fallback": "iconmind:folder-edit-outline-thin",
	});
}

export default Component;
