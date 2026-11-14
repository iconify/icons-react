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
		"content": `<style>.hqdilwbrj {
  d: path("M9 3C7 4.5 3.5 4.5 3 7.5l2.5 14h13l2.5-14c-.5-3-4-3-6-4.5");
}

.o2dukb49a {
  d: path("M12 2.5V7l-1.75 1.5M12 7l1.75 1.5m-3.5 0V17H8c-1 0-1.25-1-1-2l.75-4.5c.25-1.25 1.25-2 2.5-2Zm3.5 0V17H16c1 0 1.25-1 1-2l-.75-4.5c-.25-1.25-1.25-2-2.5-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hqdilwbrj"/><path class="o2dukb49a"/></g>`,
		"fallback": "uix-sharp:anatomy-torso",
	});
}

export default Component;
