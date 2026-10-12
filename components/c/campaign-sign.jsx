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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kx0o1cc4d {
  d: path("m8.14 6.57l.62 1.37q.14.32.49.36l1.49.16q.35.04.09.27L9.71 9.74q-.25.23-.18.58l.31 1.47q.07.34-.23.16L8.3 11.2q-.3-.17-.6 0l-1.31.75q-.3.18-.23-.16l.31-1.47q.07-.35-.18-.58L5.17 8.73q-.26-.23.09-.27l1.49-.16q.35-.04.49-.36l.62-1.37q.14-.32.28 0M13 7.75h4.5M13 11h4.5M7 14.75v6.5m10-6.5v6.5");
}

.r-2ewbbcj {
  width: 18.5px;
  height: 11px;
  x: 2.75px;
  y: 3.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="r-2ewbbcj"/><path class="kx0o1cc4d"/></g>`,
		"fallback": "iconoven:campaign-sign",
	});
}

export default Component;
