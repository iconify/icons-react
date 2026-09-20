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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.b6gnpqbjb {
  d: path("M10 10.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.isnbx8kzr {
  d: path("M10 12.5v5l2 -2 2 2v-5");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="b6gnpqbjb"/><path class="isnbx8kzr"/></g>`,
		"fallback": "iconmind:document-badge-outline-thin",
	});
}

export default Component;
