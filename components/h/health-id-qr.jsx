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
		"content": `<style>.bmcv5vb8j {
  d: path("M3 3h6.5v6.5H3Zm11.5 0H21v6.5h-6.5ZM3 14.5h6.5V21H3Z");
}

.eg_ll4-8r {
  fill: currentColor;
  d: path("M5.25 5.25h2v2h-2Zm11.5 0h2v2h-2Zm-11.5 11.5h2v2h-2Z");
}

.n0q0gac6b {
  fill: currentColor;
  d: path("M16.5 14.25h3v2.25h2.25v3H19.5v2.25h-3V19.5h-2.25v-3h2.25Z");
}

.obz7h93vh {
  d: path("M12 4h.01M12 8.5h.01M4 12h.01m4.49 0h.01M12 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bmcv5vb8j"/><path class="eg_ll4-8r"/><path class="obz7h93vh"/><path class="n0q0gac6b"/></g>`,
		"fallback": "uix-sharp:health-id-qr",
	});
}

export default Component;
