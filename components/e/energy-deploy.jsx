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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_mocaciz {
  d: path("M12.1 20H3.5V5.5h10v7.2m0 5.6v.3m-7-15.85h4");
}

.y1v_xr-xm {
  d: path("m10 8.5l-3 4h3.5l-2.5 4m7 4.5l5.25-5.25m-4-.25h4.25v4.25");
}
</style><g class="ulnmmdpxh"><path class="v_mocaciz"/><path class="y1v_xr-xm"/></g>`,
		"fallback": "uix-sharp:energy-deploy",
	});
}

export default Component;
