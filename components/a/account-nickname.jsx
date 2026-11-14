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
		"content": `<style>.kxn1bpjnc {
  d: path("M12.501 18.5H7.5l-5-6.5l5-6.5H21v7.099");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-x6e8ble {
  d: path("M6.5 12A1.25 1.25 0 1 0 9 12a1.25 1.25 0 1 0-2.5 0Zm5-2.5h6m-6 4h3m.5 7.75l.25-2L19.5 15l1.75 1.75L17 21Z");
}
</style><g class="ulnmmdpxh"><path class="kxn1bpjnc"/><path class="x-x6e8ble"/></g>`,
		"fallback": "uix-sharp:account-nickname",
	});
}

export default Component;
