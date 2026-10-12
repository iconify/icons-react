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
		"content": `<style>.dcnzi9b5t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7.25h.01");
}

.orkpmzm1a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12.75v5m3.75-5v5m3.5-5v5m3.75-5v5M3.75 20.5h16.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ykva4bcgb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.6 8.1l6.7-4.4l.7-.473l.7.473l6.7 4.4l.602.263L20 9.02v1.23H4V9.02l-.002-.657z");
}
</style><g class="ux2u0rbkq"><path class="ykva4bcgb"/><path class="dcnzi9b5t"/><path class="orkpmzm1a"/></g>`,
		"fallback": "iconoven:bank-sharp",
	});
}

export default Component;
