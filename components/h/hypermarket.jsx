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
		"content": `<style>.ey2jx2ehi {
  d: path("m3 7l1-4h16l1 4M3.5 9.5v12h17v-12M3 7a1.5 1.5 0 0 0 3 0a1.5 1.5 0 0 0 3 0a1.5 1.5 0 0 0 3 0a1.5 1.5 0 0 0 3 0a1.5 1.5 0 0 0 3 0a1.5 1.5 0 0 0 3 0");
}

.ngn05cltu {
  d: path("M6 12.5h12v9H6Zm4 0v9m4-9v9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ey2jx2ehi"/><path class="ngn05cltu"/></g>`,
		"fallback": "uix-sharp:hypermarket",
	});
}

export default Component;
