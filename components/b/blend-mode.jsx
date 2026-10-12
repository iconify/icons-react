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
		"content": `<style>.ekggvtblj {
  cx: 8.75px;
  cy: 12px;
  r: 6px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v1ocdgb7u {
  cx: 15.25px;
  cy: 12px;
  r: 6px;
}
</style><g class="hntgybcog"><circle class="ekggvtblj"/><circle class="v1ocdgb7u"/></g>`,
		"fallback": "iconoven:blend-mode",
	});
}

export default Component;
