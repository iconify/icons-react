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
		"content": `<style>.d6klj_saq {
  width: 18px;
  height: 18px;
  x: 3px;
  y: 3px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.erg1mi22d {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 4h4v4h-4Zm1 2h2M4 16h4v4H4Zm1 2h2");
}

.srwloktrn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3v18m6-18v18M3 9h18M3 15h18");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="d6klj_saq"/><path class="srwloktrn"/><path class="erg1mi22d"/></g>`,
		"fallback": "iconoven:crossword",
	});
}

export default Component;
