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
		"content": `<style>.sabi3pesz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h4.75V5.5l1-1H11l1 1V9h9.5v6H12v3.5l-1 1H8.25l-1-1V15H2.5Zm4.75 0v6M12 9v6m4.75-6v6m-9.5-6H12m-4.75 6H12");
}
</style><path class="sabi3pesz"/>`,
		"fallback": "uix:flat-carton",
	});
}

export default Component;
