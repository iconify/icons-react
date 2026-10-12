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
		"content": `<style>.lp3dt1b0s {
  d: path("M12 17c0-2.5-1.25-3.5-.75-5.5l.314-1.255L14.25 9.6m-2.85 2.7l-2.15-.7m-4 5.4H19.5l-.29.69l-1.17 2.87l-.29.69H6.25l-.29-.69l-1.17-2.87L4.5 17z");
}

.wg04zdbqr {
  d: path("M6.75 4a3.25 1.25 0 1 0 6.5 0a3.25 1.25 0 1 0-6.5 0ZM3.5 10a4 2.25 0 1 0 8 0a4 2.25 0 1 0-8 0Zm8.75-2.5a4.25 2.5 0 1 0 8.5 0a4.25 2.5 0 1 0-8.5 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wg04zdbqr"/><path class="lp3dt1b0s"/></g>`,
		"fallback": "iconoven:bonsai-sharp",
	});
}

export default Component;
