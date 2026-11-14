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
		"content": `<style>.borc5ebup {
  d: path("M9.544 7.345za1.29 1.29 0 0 0 1.189.864a.311.311 0 0 1 .181.559a1.29 1.29 0 0 0-.454 1.398a.311.311 0 0 1-.475.345a1.29 1.29 0 0 0-1.47 0a.311.311 0 0 1-.475-.345a1.29 1.29 0 0 0-.454-1.398a.311.311 0 0 1 .181-.559a1.29 1.29 0 0 0 1.189-.864a.311.311 0 0 1 .588 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tgne-ebfw {
  d: path("M4 2.5v19M6.05 3.307l10.907 4.297a1.5 1.5 0 0 1 0 2.792L6.05 14.693A1.5 1.5 0 0 1 4 13.297V4.703a1.5 1.5 0 0 1 2.05-1.396");
}
</style><g class="hntgybcog"><path class="tgne-ebfw"/><path class="borc5ebup"/></g>`,
		"fallback": "uix:fan-club",
	});
}

export default Component;
