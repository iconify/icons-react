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
		"content": `<style>.hwyp-cwtv {
  d: path("M8.5 12V7.5h5l2 2V12M12 12v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vdnmfrbqo {
  d: path("M2.5 12h19v9.5h-19ZM5 12l.5-7.5h13L19 12");
}
</style><g class="ulnmmdpxh"><path class="vdnmfrbqo"/><path class="hwyp-cwtv"/></g>`,
		"fallback": "uix-sharp:briefcase-open",
	});
}

export default Component;
