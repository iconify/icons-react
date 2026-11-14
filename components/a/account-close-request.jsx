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
		"content": `<style>.b_uyed7jv {
  d: path("M12.8 21.5H4.5v-19h15v9.4m-11-9.4v19m3-14.5h4");
}

.ub1jg5_1h {
  d: path("M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm1.75 0h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b_uyed7jv"/><path class="ub1jg5_1h"/></g>`,
		"fallback": "uix-sharp:account-close-request",
	});
}

export default Component;
