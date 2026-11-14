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
		"content": `<style>.e5gil0b2f {
  d: path("M11.671 17.5H4.75c-.75 0-1.5-.75-1.5-1.75V6c0-1 .75-1.75 1.5-1.75H6.5V4c0-.75.5-1.25 1.25-1.25H11c.5 0 1.25.5 1.25 1.25v.25h1.5c1 0 1.75.75 1.75 1.75v7.222");
}

.sp9-gbboy {
  d: path("M6.5 2.75h5.75V6.5H6.5ZM6.25 9.5h6.25M6.25 13h4.25m4 3H21m-1.75-1.75L21 16l-1.75 1.75M21.5 20H15m1.75-1.75L15 20l1.75 1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e5gil0b2f"/><path class="sp9-gbboy"/></g>`,
		"fallback": "uix-sharp:handover",
	});
}

export default Component;
