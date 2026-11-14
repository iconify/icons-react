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
		"content": `<style>.d4t3stbdy {
  d: path("M14.5 9.5c-4 1-5 3-2.5 4.25S13.5 17 9.5 18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ykpngnb_b {
  d: path("M12 3v18.5M12 5C9 4 6 4 3.5 5C6 6.5 9 7 12 6.5M12 5c3-1 6-1 8.5 0C18 6.5 15 7 12 6.5m-2.5 3c4 1 5 3 2.5 4.25S10.5 17 14.5 18");
}
</style><g class="ulnmmdpxh"><path class="ykpngnb_b"/><path class="d4t3stbdy"/></g>`,
		"fallback": "uix-sharp:caduceus",
	});
}

export default Component;
