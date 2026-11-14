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
		"content": `<style>.d-nfpjb2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.125 3h11.75A2.625 2.625 0 0 1 20.5 5.625v12.75A2.625 2.625 0 0 1 17.875 21H6.125A2.625 2.625 0 0 1 3.5 18.375V5.625A2.625 2.625 0 0 1 6.125 3M12 3v18M9.5 11v2m5-2v2");
}
</style><path class="d-nfpjb2s"/>`,
		"fallback": "uix:built-in-wardrobe",
	});
}

export default Component;
