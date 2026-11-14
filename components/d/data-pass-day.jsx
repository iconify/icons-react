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
		"content": `<style>.tommqtb3y {
  fill: currentColor;
  d: path("M6 9.5h3v3H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5wpfgb-s {
  d: path("M12.9 16.5H3v-13h13v10.7M7 2v3m5-3v3");
}

.z87sto2xh {
  d: path("M15.75 19v2m2.75-4v4m2.75-6v6");
}
</style><g class="ulnmmdpxh"><path class="x5wpfgb-s"/><path class="tommqtb3y"/><path class="z87sto2xh"/></g>`,
		"fallback": "uix-sharp:data-pass-day",
	});
}

export default Component;
