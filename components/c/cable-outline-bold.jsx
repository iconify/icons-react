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
		"content": `<style>.g4pomhbdd {
  d: path("M16 11.5V14");
}

.jnqbgzr1g {
  d: path("M9 7.5h3l4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.toodonbmb {
  d: path("M12.5 16a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.xmh5z6a2x {
  d: path("M2 6a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="xmh5z6a2x"/><path class="jnqbgzr1g"/><path class="g4pomhbdd"/><path class="toodonbmb"/></g>`,
		"fallback": "iconmind:cable-outline-bold",
	});
}

export default Component;
