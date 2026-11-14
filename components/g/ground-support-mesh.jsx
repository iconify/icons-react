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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w5in3xb1h {
  d: path("M3 13.5q9-8 18 0M3 8h.01M21 8h.01M12 4h.01");
}

.wymarjbdf {
  d: path("M3 8q9-8 18 0v11q-9-8-18 0Zm4.5-3v11M12 4v11m4.5-10v11");
}
</style><g class="ulnmmdpxh"><path class="wymarjbdf"/><path class="w5in3xb1h"/></g>`,
		"fallback": "uix-sharp:ground-support-mesh",
	});
}

export default Component;
