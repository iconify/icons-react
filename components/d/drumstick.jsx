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
		"content": `<style>.gx5a-ybeg {
  cx: 6.5px;
  cy: 6.5px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lmm9hoo6z {
  cx: 17.5px;
  cy: 6.5px;
  r: 1.5px;
}

.s0pxgjf9z {
  d: path("M4.25 20.75L16.48 7.6m3.27 13.15L7.52 7.6");
}
</style><g class="hntgybcog"><path class="s0pxgjf9z"/><circle class="lmm9hoo6z"/><circle class="gx5a-ybeg"/></g>`,
		"fallback": "iconoven:drumstick",
	});
}

export default Component;
