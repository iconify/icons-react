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
		"content": `<style>.ajvzrmb2h {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM12 5.5h.01M18.5 12h.01M12 18.5h.01M5.5 12h.01");
}

.qq3otgbjy {
  d: path("M12 9v3l2.25 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ajvzrmb2h"/><path class="qq3otgbjy"/></g>`,
		"fallback": "uix-sharp:clock-wall",
	});
}

export default Component;
