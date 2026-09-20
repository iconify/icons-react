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

.l51r-wb3s {
  fill: currentColor;
  d: path("M4 5v16h16V5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qvytntb8g {
  d: path("M7 10h10");
}

.z7wppxt9k {
  d: path("M4 5v16h16V5Z");
}
</style><g class="nrj6p8qat"><path class="l51r-wb3s"/><path class="z7wppxt9k"/><path class="ce80bno8x"/><path class="qvytntb8g"/><path class="c6uw-ccfl"/><path class="f8arnkt8y"/></g>`,
		"fallback": "iconmind:guest-list-duotone-regular",
	});
}

export default Component;
