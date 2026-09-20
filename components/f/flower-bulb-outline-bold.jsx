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
		"content": `<style>.e-2-gx6en {
  d: path("M12 10c3 0 5 -3 5 -6 -3 0 -5 3 -5 6");
}

.ly7sc7y4x {
  d: path("M12 5v7");
}

.rt0cersnu {
  d: path("M12 21c-3 0 -5 -2 -5 -4.5S9 12 12 12s5 2 5 4.5 -2 4.5 -5 4.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rt0cersnu"/><path class="ly7sc7y4x"/><path class="e-2-gx6en"/></g>`,
		"fallback": "iconmind:flower-bulb-outline-bold",
	});
}

export default Component;
