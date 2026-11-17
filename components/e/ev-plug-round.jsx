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
		"content": `<style>.o7ayungmf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 5h4.015a4 4 0 0 1 3.58 2.216a8.485 8.485 0 1 1-15.19 0A4 4 0 0 1 7.985 5ZM8 9h.01M12 9h.01M16 9h.01M10 14h.01M14 14h.01");
}
</style><path class="o7ayungmf"/>`,
		"fallback": "coolicons:ev-plug-round",
	});
}

export default Component;
