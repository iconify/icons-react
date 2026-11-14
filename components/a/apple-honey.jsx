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
		"content": `<style>.gplpqykpq {
  d: path("M12.9 21H2.5V8.5h13v4.7M4 5.5h10v3H4Zm7.5 0l5.5-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xn0httnow {
  d: path("M2.5 12.5h4v3a1.25 1.25 0 0 0 2.5 0v-3h6.5m2.5 4c-2-1.5-3.25.25-3 2s1.75 3 3 2.5c1.25.5 2.75-.75 3-2.5s-1-3.5-3-2Zm0 0l.75-2");
}
</style><g class="ulnmmdpxh"><path class="gplpqykpq"/><path class="xn0httnow"/></g>`,
		"fallback": "uix-sharp:apple-honey",
	});
}

export default Component;
