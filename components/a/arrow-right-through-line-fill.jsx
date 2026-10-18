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
		"content": `<style>.ed9j2mggx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12L21 12M17 8L21 12L17 16M12 3L12 8M12 16L12 21");
}
</style><path class="ed9j2mggx"/>`,
		"fallback": "keyline-icons:arrow-right-through-line-fill",
	});
}

export default Component;
