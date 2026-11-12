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
		"content": `<style>.hurnl5bgk {
  d: path("M7.99956 4.82959L6.30309 6.35641C4.76054 7.74471 3.98926 8.43886 3.98926 9.32959C3.98926 10.2203 4.76054 10.9145 6.30309 12.3028L7.99956 13.8296");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nug48ridb {
  d: path("M16 11L17.6965 12.5268C19.239 13.9151 20.0103 14.6093 20.0103 15.5C20.0103 16.3907 19.239 17.0849 17.6965 18.4732L16 20");
}

.t90_kbcvk {
  d: path("M13.9873 5L12.9939 8.70743M11.8437 13L10.0137 19.8297");
}
</style><g class="ipq1z-bjh"><path class="nug48ridb"/><path class="hurnl5bgk"/><path class="t90_kbcvk"/></g>`,
		"fallback": "solar:code-2-broken",
	});
}

export default Component;
