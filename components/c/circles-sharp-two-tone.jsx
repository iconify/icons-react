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
		"content": `<style>.ci0eggbhi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  fill-rule: evenodd;
  d: path("M17 9C17 13.2803 13.2803 17 9 17C4.7197 17 1 13.2803 1 9C1 4.7197 4.7197 1 9 1C13.2803 1 17 4.7197 17 9ZM23 15C23 19.2803 19.2803 23 15 23C10.7197 23 7 19.2803 7 15C7 10.7197 10.7197 7 15 7C19.2803 7 23 10.7197 23 15Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w32gfz6zt {
  d: path("M16 9C16 5.1339 12.8661 2 9 2C5.1339 2 2 5.1339 2 9C2 12.8661 5.1339 16 9 16C12.8661 16 16 12.8661 16 9ZM22 15C22 11.1339 18.8661 8 15 8C11.1339 8 8 11.1339 8 15C8 18.8661 11.1339 22 15 22C18.8661 22 22 18.8661 22 15Z");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="ci0eggbhi"/><path class="w32gfz6zt"/></g>`,
		"fallback": "keyline-icons:circles-sharp-two-tone",
	});
}

export default Component;
