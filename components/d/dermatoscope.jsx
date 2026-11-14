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
		"content": `<style>.fsc3ttbcq {
  fill: currentColor;
  d: path("M8.25 9.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vt0mkkbui {
  d: path("M5.5 9.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.zremgbobi {
  d: path("M3 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm10.184 6.159l2.475-2.475l5.657 5.657l-2.475 2.475Z");
}
</style><g class="ulnmmdpxh"><path class="zremgbobi"/><path class="vt0mkkbui"/><path class="fsc3ttbcq"/></g>`,
		"fallback": "uix-sharp:dermatoscope",
	});
}

export default Component;
