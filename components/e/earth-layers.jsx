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
		"content": `<style>.agbwxyu4b {
  d: path("M12 12V2.5a9.5 9.5 0 1 0 9.5 9.5Z");
}

.og913g3xv {
  d: path("M12 8.5a3.5 3.5 0 0 1 3.5 3.5M12 5.5a6.5 6.5 0 0 1 6.5 6.5M12 2.5a4.5 9.5 0 0 0 0 19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="agbwxyu4b"/><path class="og913g3xv"/></g>`,
		"fallback": "uix-sharp:earth-layers",
	});
}

export default Component;
