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
		"content": `<style>.oj_76jbjk {
  d: path("M11.2 19H3.5V2h13v10.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uyt3f0b8i {
  d: path("m8.5 7.5l-2.25 2.75L8.5 13m2.75-5.5l2.25 2.75l-1.993 2.436M14 15.5h2a2 2 0 0 1 2 2v4.25a1.5 1.5 0 0 0-1.5-1.5H14Zm8 0h-2a2 2 0 0 0-2 2v4.25a1.5 1.5 0 0 1 1.5-1.5H22Z");
}
</style><g class="ulnmmdpxh"><path class="oj_76jbjk"/><path class="uyt3f0b8i"/></g>`,
		"fallback": "uix-sharp:code-comment-doc",
	});
}

export default Component;
