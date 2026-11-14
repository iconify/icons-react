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
		"content": `<style>.bc_zdk5yy {
  d: path("m16.75 14.25l1.5 1.25l-1.5 1.25");
}

.d_lxe3nhn {
  d: path("M21 18.25a2.75 2.75 0 1 1-2.75-2.75");
}

.jn6f_02ks {
  d: path("M12.7 19H2.5V5h19v9.6m-19-5.1h19m-19 0h19M6 15h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jn6f_02ks"/><path class="d_lxe3nhn"/><path class="bc_zdk5yy"/></g>`,
		"fallback": "uix-sharp:credit-card-refresh",
	});
}

export default Component;
