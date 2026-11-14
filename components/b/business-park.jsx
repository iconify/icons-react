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
		"content": `<style>.c0sua3x1g {
  d: path("M10.75 21.5v-4h2.5v4m-8-6.5h.01M12 10h.01m6.74 3h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r02fzqbhp {
  d: path("M2.5 21.5V11H8V5h2V3h4v2h2v3h5.5v13.5ZM8 11v10.5M16 8v13.5");
}
</style><g class="hntgybcog"><path class="r02fzqbhp"/><path class="c0sua3x1g"/></g>`,
		"fallback": "uix:business-park",
	});
}

export default Component;
