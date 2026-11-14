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
		"content": `<style>.bpraj44ru {
  d: path("M2.5 20L6 13h15.5l-3 7Zm5-7V9.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1V13");
}

.pic0zyzsz {
  d: path("M2.5 20V5A1.5 1.5 0 0 1 4 3.5h4.5l2 2H18A1.5 1.5 0 0 1 19.5 7v6");
}

.t2pecxbrd {
  d: path("M7.75 8.75L12 10.5l4.25-1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pic0zyzsz"/><path class="bpraj44ru"/><path class="t2pecxbrd"/></g>`,
		"fallback": "uix-sharp:chat-requests-inbox",
	});
}

export default Component;
