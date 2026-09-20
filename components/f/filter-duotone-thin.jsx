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
		"content": `<style>.bja01onzw {
  fill: currentColor;
  d: path("M9 5H3l7 7v7h4v-7l7 -7h-6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mn6kn4ume {
  d: path("M9 5H3l7 7v7h4v-7l7 -7h-6");
}
</style><g class="hntgybcog"><path class="bja01onzw"/><path class="mn6kn4ume"/></g>`,
		"fallback": "iconmind:filter-duotone-thin",
	});
}

export default Component;
