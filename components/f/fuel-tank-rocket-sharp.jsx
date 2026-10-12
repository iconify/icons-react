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
		"content": `<style>.i0npc1bun {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 2.75C10.45 2.75 12 5.25 12 8v13.25H4.5V8c0-2.75 1.55-5.25 3.75-5.25ZM4.5 9H12m0 1.25h3.75M12 16h3.75m1.5-9l1.5 1.35v7.9l1.75 2.5v1.5H14v-1.5l1.75-2.5v-7.9z");
}
</style><path class="i0npc1bun"/>`,
		"fallback": "iconoven:fuel-tank-rocket-sharp",
	});
}

export default Component;
