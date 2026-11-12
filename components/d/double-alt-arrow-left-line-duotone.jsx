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
		"content": `<style>.c2rxlk3sw {
  d: path("M12.9999 19L6.99991 12L12.9999 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jlkx21byw {
  d: path("M16.9998 18.9999L10.9998 11.9999L16.9998 4.99988");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="c2rxlk3sw"/><path class="jlkx21byw"/></g>`,
		"fallback": "solar:double-alt-arrow-left-line-duotone",
	});
}

export default Component;
