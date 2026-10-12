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

.i5_aiksxo {
  d: path("M5.85 2.75h12.3q.6 0 .6.6v17.3q0 .6-.5.27L17 20.08q-.5-.33-1 0l-1.25.84q-.5.33-1 0l-1.25-.84q-.5-.33-1 0l-1.25.84q-.5.33-1 0L8 20.08q-.5-.33-1 0l-1.25.84q-.5.33-.5-.27V3.35q0-.6.6-.6");
}

.iat3pobxl {
  d: path("M13.93 10.08c-.28-.7-1.05-1.22-1.92-1.22c-1.12 0-1.92.63-1.92 1.5c0 1.99 4.02 1.12 4.02 3.25c0 .91-.88 1.54-2.1 1.54c-.94 0-1.75-.52-2.1-1.22M12 7.63v1.22m0 6.3v1.22");
}
</style><g class="hntgybcog"><path class="i5_aiksxo"/><path class="iat3pobxl"/></g>`,
		"fallback": "iconoven:expense-report",
	});
}

export default Component;
