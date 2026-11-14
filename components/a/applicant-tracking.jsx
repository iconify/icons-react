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
		"content": `<style>.t85lkmb9z {
  d: path("M12 13.5S7.5 9.5 7.5 7a4.5 4.5 0 0 1 9 0c0 2.5-4.5 6.5-4.5 6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y54ydw5kj {
  d: path("M10.5 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM2.75 18.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm8 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm8 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM8 18.5h.01m7.99 0h.01");
}
</style><g class="ulnmmdpxh"><path class="t85lkmb9z"/><path class="y54ydw5kj"/></g>`,
		"fallback": "uix-sharp:applicant-tracking",
	});
}

export default Component;
