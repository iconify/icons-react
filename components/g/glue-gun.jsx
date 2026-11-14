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
		"content": `<style>.g8v0_eblz {
  d: path("M13.25 13h1.25q1.25 0 1.25-1.25V9.5m4.75.5c1.5 1.75 1.25 3.25 0 3.25s-1.5-1.5 0-3.25Z");
}

.mznbi8b7f {
  d: path("M6 4h11v5.5H6Zm11 1.5l3.5 1V7L17 8M9 9.5l-1.5 9.75q-.25 1.25 1 1.25H11q1.25 0 1.5-1.25l1.25-9.75M2.5 5.25H6v3H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mznbi8b7f"/><path class="g8v0_eblz"/></g>`,
		"fallback": "uix-sharp:glue-gun",
	});
}

export default Component;
