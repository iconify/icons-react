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
		"content": `<style>.nbyw4qobu {
  d: path("M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y38b1chaj {
  d: path("M6 8.25h3v7.5H6Zm9 0h3v7.5h-3ZM9 12h6");
}
</style><g class="ulnmmdpxh"><path class="nbyw4qobu"/><path class="y38b1chaj"/></g>`,
		"fallback": "uix-sharp:high-protein-mark",
	});
}

export default Component;
