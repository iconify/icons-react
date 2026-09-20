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
		"content": `<style>.fgsu10bod {
  d: path("M7 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ipv0cebdm {
  d: path("M13 16a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.maut9lbea {
  d: path("M4 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.mpg95hbwb {
  d: path("M15 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uk0rveqaj {
  d: path("M4 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="uk0rveqaj"/><path class="fgsu10bod"/><path class="maut9lbea"/><path class="mpg95hbwb"/><path class="ipv0cebdm"/></g>`,
		"fallback": "iconmind:diversity-mmr-outline-bold",
	});
}

export default Component;
