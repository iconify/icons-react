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

.hw8bn6bpe {
  d: path("M2.5 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 4h15");
}

.m3ax82ohn {
  d: path("M5.25 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m8.5-2h.75a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-.75a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5m5.5 0H20a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 20 16h-.75a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5M14 12v2m5.5-2v2");
}
</style><g class="hntgybcog"><path class="hw8bn6bpe"/><path class="m3ax82ohn"/></g>`,
		"fallback": "uix:barcode-sticker-roll",
	});
}

export default Component;
