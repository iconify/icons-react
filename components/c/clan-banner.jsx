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
		"content": `<style>.cle-vebav {
  d: path("M5 3.25h14m-12.5 0v11.5h11V3.25M12 14.75v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s3781acdv {
  d: path("M9.25 8.25L12 11l2.75-2.75");
}
</style><g class="hntgybcog"><path class="cle-vebav"/><path class="s3781acdv"/></g>`,
		"fallback": "uix:clan-banner",
	});
}

export default Component;
