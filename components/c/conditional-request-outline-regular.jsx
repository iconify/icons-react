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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.kq20kb-1c {
  d: path("M9 6.5h6");
}

.me177l4bh {
  d: path("M11 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uem6rrbdu {
  d: path("M9.5 12a2.5 2.5 0 1 1 2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="kq20kb-1c"/><path class="uem6rrbdu"/><path class="me177l4bh"/></g>`,
		"fallback": "iconmind:conditional-request-outline-regular",
	});
}

export default Component;
