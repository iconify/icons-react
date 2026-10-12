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
		"content": `<style>.tf0dwscbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6.5L2.75 12L7 17.5m10-11l4.25 5.5L17 17.5M12 7.25q.57 4.18 4.75 4.75q-4.18.57-4.75 4.75q-.57-4.18-4.75-4.75q4.18-.57 4.75-4.75Z");
}
</style><path class="tf0dwscbl"/>`,
		"fallback": "iconoven:code-gen-sharp",
	});
}

export default Component;
