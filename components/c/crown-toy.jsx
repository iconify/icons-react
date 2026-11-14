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
		"content": `<style>.o9-wfbbiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 7l5 5.5L12 4l4 8.5L21 7l-1 12.75H4Zm.75 9.25h16.5M12 13h.01");
}
</style><path class="o9-wfbbiv"/>`,
		"fallback": "uix-sharp:crown-toy",
	});
}

export default Component;
