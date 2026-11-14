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
		"content": `<style>.fzj_39bxu {
  d: path("M12.7 21H3v-9.5L9 7V3.5L11 2l2 1.5V7l3.68 2.76");
}

.ufc247mnu {
  d: path("M8.5 21v-4.5h2m1 1V21m6.25-7l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fzj_39bxu"/><path class="ufc247mnu"/></g>`,
		"fallback": "uix-sharp:after-school-club",
	});
}

export default Component;
