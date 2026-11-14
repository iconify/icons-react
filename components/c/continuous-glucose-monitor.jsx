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
		"content": `<style>.ef6z0dbai {
  d: path("M3 14a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.hetiejouj {
  fill: currentColor;
  d: path("M10 9.5c1.75 2.25 3 3.75 3 5.25a3 3 0 0 1-6 0c0-1.5 1.25-3 3-5.25Z");
}

.o22_7nb8b {
  d: path("M16 5.25A2.75 2.75 0 0 1 18.75 8M16 2.75A5.25 5.25 0 0 1 21.25 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ef6z0dbai"/><path class="hetiejouj"/><path class="o22_7nb8b"/></g>`,
		"fallback": "uix-sharp:continuous-glucose-monitor",
	});
}

export default Component;
