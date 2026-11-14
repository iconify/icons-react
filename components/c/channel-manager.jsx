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
		"content": `<style>.e8oveacwy {
  d: path("M2.5 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m14.75-9.5h2.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 7h-2.5a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75m0 7.25h2.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75m0 7.25h2.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 17.25 17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xl6zkza7z {
  d: path("M8.5 12h7m-7.75-2l3.75-5.25h4M7.75 14l3.75 5.25h4");
}
</style><g class="hntgybcog"><path class="e8oveacwy"/><path class="xl6zkza7z"/></g>`,
		"fallback": "uix:channel-manager",
	});
}

export default Component;
