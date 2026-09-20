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
		"content": `<style>.c6uw-ccfl {
  d: path("M7 14h10");
}

.ce80bno8x {
  d: path("M9 5V2h6v3");
}

.f8arnkt8y {
  d: path("M7 18h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l51r-wb3s {
  fill: currentColor;
  d: path("M4 5v16h16V5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qvytntb8g {
  d: path("M7 10h10");
}

.z7wppxt9k {
  d: path("M4 5v16h16V5Z");
}
</style><g class="hntgybcog"><path class="l51r-wb3s"/><path class="z7wppxt9k"/><path class="ce80bno8x"/><path class="qvytntb8g"/><path class="c6uw-ccfl"/><path class="f8arnkt8y"/></g>`,
		"fallback": "iconmind:guest-list-duotone-thin",
	});
}

export default Component;
