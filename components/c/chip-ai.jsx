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
		"content": `<style>.dp48jcbwg {
  d: path("M5.5 5.5h13v13h-13Zm4-3v3m5-3v3m-5 13v3m5-3v3m-12-12h3m-3 5h3m13-5h3m-3 5h3");
}

.g2uae3trb {
  d: path("M12 8.5c.25 2.25 1.25 3.25 3.5 3.5c-2.25.25-3.25 1.25-3.5 3.5c-.25-2.25-1.25-3.25-3.5-3.5c2.25-.25 3.25-1.25 3.5-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dp48jcbwg"/><path class="g2uae3trb"/></g>`,
		"fallback": "uix-sharp:chip-ai",
	});
}

export default Component;
