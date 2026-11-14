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
		"content": `<style>.mtqo8zbik {
  d: path("M6.5 10.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.5 3V16");
}

.p_lj46xvb {
  d: path("M12 6C9 2.5 3.5 3.5 3.5 9.5C3.5 15 8 19 12 21c4-2 8.5-6 8.5-11.5c0-6-5.5-7-8.5-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p_lj46xvb"/><path class="mtqo8zbik"/></g>`,
		"fallback": "uix-sharp:barn-owl",
	});
}

export default Component;
