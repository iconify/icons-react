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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.gcalxb98a {
  d: path("M8 13h8");
}

.h-f2dccmj {
  d: path("M8 16.5h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sjcku4b0z {
  d: path("m8 9 2 -2 2 2 2 -2 2 2");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="sjcku4b0z"/><path class="gcalxb98a"/><path class="h-f2dccmj"/></g>`,
		"fallback": "iconmind:golden-file-outline-bold",
	});
}

export default Component;
