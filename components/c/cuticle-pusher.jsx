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
		"content": `<style>.pcpgg6rww {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.121 6.343l1.05-1.05a1.5 1.5 0 0 1 1.652-.318l1.979.849a1.5 1.5 0 0 1 .47 2.439l-1.615 1.616a1.5 1.5 0 0 1-2.121 0l-1.415-1.415a1.5 1.5 0 0 1 0-2.121m.707 2.829l-2.121 2.121m0 0za1.75 1.75 0 0 1 0 2.475l-5.303 5.303a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475l5.303-5.303a1.75 1.75 0 0 1 2.475 0");
}
</style><path class="pcpgg6rww"/>`,
		"fallback": "uix:cuticle-pusher",
	});
}

export default Component;
