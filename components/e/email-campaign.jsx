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
		"content": `<style>.l4w-aw1pr {
  d: path("M2.5 8h15v11h-15Z");
}

.n24bspbit {
  d: path("m2.5 10l7.5 4.5l7.5-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgqgox79d {
  d: path("M6.5 8V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2");
}
</style><g class="ulnmmdpxh"><path class="zgqgox79d"/><path class="l4w-aw1pr"/><path class="n24bspbit"/></g>`,
		"fallback": "uix-sharp:email-campaign",
	});
}

export default Component;
