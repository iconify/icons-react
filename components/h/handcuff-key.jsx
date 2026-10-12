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
		"content": `<style>.bauk4qkrc {
  d: path("m11.21 14.91l1.45-1.44q.42-.43 0-.85l-1.28-1.28q-.42-.42-.85 0l-1.44 1.45q-.43.42-.01.84l1.29 1.29q.42.42.84-.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jd-_3bb9l {
  d: path("M11.31 14.81a4.5 4.5 0 1 1-2.12-2.12");
}

.jo45v1frk {
  cx: 19px;
  cy: 5px;
  r: 2.25px;
}

.zi-m-1cdt {
  d: path("M17.41 6.59L14.5 9.5l1.24 1.24");
}
</style><g class="hntgybcog"><path class="jd-_3bb9l"/><path class="bauk4qkrc"/><circle class="jo45v1frk"/><path class="zi-m-1cdt"/></g>`,
		"fallback": "iconoven:handcuff-key",
	});
}

export default Component;
