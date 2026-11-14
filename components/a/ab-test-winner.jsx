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
		"content": `<style>.e2r__4qfq {
  d: path("M2.5 12h8v9.5h-8Zm11-3.5h8v13h-8Z");
}

.f3zoati4m {
  fill: currentColor;
  d: path("M14.5 6V3l1.75 1.75L17.5 3l1.25 1.75L20.5 3v3Z");
}

.qi3-3xbtf {
  d: path("m4.5 19l2-5l2 5m-3.25-1.75h2.5m8-5.75v7.25m0-7.25H18a1.75 1.75 0 0 1 0 3.5h-2.25m0 0h2.5a1.875 1.875 0 0 1 0 3.75h-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e2r__4qfq"/><path class="qi3-3xbtf"/><path class="f3zoati4m"/></g>`,
		"fallback": "uix-sharp:ab-test-winner",
	});
}

export default Component;
