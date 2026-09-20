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
		"content": `<style>.b6gnpqbjb {
  d: path("M10 10.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ex6sma95g {
  d: path("M8 3h8l5 5v8l-5 5H8l-5 -5V8Z");
}

.nzb-j6sxx {
  d: path("M12 12.5V15");
}

.rnyye8dag {
  d: path("M12 13.5h2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ex6sma95g"/><path class="b6gnpqbjb"/><path class="nzb-j6sxx"/><path class="rnyye8dag"/></g>`,
		"fallback": "iconmind:crypto-wallet-outline-bold",
	});
}

export default Component;
