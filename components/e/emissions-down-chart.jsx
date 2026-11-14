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
		"content": `<style>.ir4a-mb6j {
  d: path("m7 7l3.5 4L13 9l5 5");
}

.j_q_y1bdx {
  d: path("M3.5 3.5v17h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0-xjdbdk {
  d: path("M15 14h3v-3");
}
</style><g class="ulnmmdpxh"><path class="j_q_y1bdx"/><path class="ir4a-mb6j"/><path class="z0-xjdbdk"/></g>`,
		"fallback": "uix-sharp:emissions-down-chart",
	});
}

export default Component;
