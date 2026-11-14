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
		"content": `<style>.e1lau-y5o {
  d: path("M16 14.5h4v3.25h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y92z8vf6y {
  d: path("M12.3 19.5H2.5V4H19v7.7M2.5 8.5H19m-12-6v3m7.5-3v3m0 12.25h7l-2 3.25h-3Z");
}
</style><g class="ulnmmdpxh"><path class="y92z8vf6y"/><path class="e1lau-y5o"/></g>`,
		"fallback": "uix-sharp:berth-schedule",
	});
}

export default Component;
