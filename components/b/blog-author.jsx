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
		"content": `<style>.r5bvedgys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.672 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.881 0 3.567.441 4.861 1.214M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M21 15za1.06 1.06 0 0 0-1.5 0l-3.282 3.282a1.5 1.5 0 0 0-.332.504l-.386.964a.577.577 0 0 0 .75.75l.964-.386a1.5 1.5 0 0 0 .504-.332L21 16.5a1.06 1.06 0 0 0 0-1.5");
}
</style><path class="r5bvedgys"/>`,
		"fallback": "uix:blog-author",
	});
}

export default Component;
