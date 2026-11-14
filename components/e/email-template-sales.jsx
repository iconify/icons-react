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
		"content": `<style>.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.s1xa20bah {
  d: path("m2.5 7l9.5 6l9.5-6m-.75 11.5A2.75 2.75 0 1 1 18 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yc5m5tzdr {
  d: path("M12.5 19.5h-10v-15h19v10.8");
}
</style><g class="ulnmmdpxh"><path class="yc5m5tzdr"/><path class="s1xa20bah"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:email-template-sales",
	});
}

export default Component;
