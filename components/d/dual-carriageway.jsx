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
		"content": `<style>.n8bh07-4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5v19m19-19v19M12 2.5zA1.5 1.5 0 0 1 13.5 4v16a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 12 2.5m-5.5 1V20M5 18.5L6.5 20L8 18.5m9.5 2V4M16 5.5L17.5 4L19 5.5");
}
</style><path class="n8bh07-4o"/>`,
		"fallback": "uix:dual-carriageway",
	});
}

export default Component;
