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
		"content": `<style>.nm1m4obuo {
  d: path("M6 3h12.5a3 4.5 0 0 1 0 9H6m0 0l-1.5 8.5h13l1-8.5");
}

.sru3ztgme {
  d: path("M3 7.5a3 4.5 0 1 0 6 0a3 4.5 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sru3ztgme"/><path class="nm1m4obuo"/></g>`,
		"fallback": "uix-sharp:fabric-bolt",
	});
}

export default Component;
