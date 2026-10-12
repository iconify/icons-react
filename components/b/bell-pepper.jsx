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
		"content": `<style>.anl6l38hi {
  d: path("M12 7V5.25c0-1 .75-1.75 1.75-2.25M9 9.75q3 1.5 6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jobkpxbqo {
  d: path("M12 7c1.25-1 3-1.25 4.5-.75s2 2.25 2 4.5v5c0 2.5-.5 4.5-2 5c-1 .35-1.75-.1-2.5-.75c-.75.9-3.25.9-4 0c-.75.65-1.5 1.1-2.5.75c-1.5-.5-2-2.5-2-5v-5c0-2.25.5-4 2-4.5S10.75 6 12 7");
}
</style><g class="hntgybcog"><path class="jobkpxbqo"/><path class="anl6l38hi"/></g>`,
		"fallback": "iconoven:bell-pepper",
	});
}

export default Component;
