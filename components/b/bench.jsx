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
		"content": `<style>.g4-nfbcqy {
  d: path("M5.25 15.75v5.5m13.5-5.5v5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ja9606-bf {
  width: 18.5px;
  height: 3px;
  x: 2.75px;
  y: 12.75px;
  rx: 1.5px;
}

.nfyc5-1-z {
  d: path("M5.25 4.75v8m13.5-8v8m-15-6.5h16.5m-16.5 3.5h16.5");
}
</style><g class="hntgybcog"><path class="nfyc5-1-z"/><rect class="ja9606-bf"/><path class="g4-nfbcqy"/></g>`,
		"fallback": "iconoven:bench",
	});
}

export default Component;
