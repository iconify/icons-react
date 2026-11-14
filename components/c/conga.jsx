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

.jdqs-2bfp {
  d: path("M5.75 9q6.25 2.5 12.5 0");
}

.ocr8deb-g {
  d: path("M6.5 5C5 10 5.5 16 8 21.5h8C18.5 16 19 10 17.5 5");
}

.p_wh_ebtx {
  d: path("M6.5 5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0");
}
</style><g class="hntgybcog"><path class="p_wh_ebtx"/><path class="ocr8deb-g"/><path class="jdqs-2bfp"/></g>`,
		"fallback": "uix:conga",
	});
}

export default Component;
