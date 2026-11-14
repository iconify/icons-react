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
		"content": `<style>.co8v_xbyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7h17l-7 7v4h-3v-4ZM8 3.5h.01M12 3h.01m3.99.5h.01M12 21h.01");
}
</style><path class="co8v_xbyz"/>`,
		"fallback": "uix-sharp:agent-leads",
	});
}

export default Component;
