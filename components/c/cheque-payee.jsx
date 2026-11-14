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
		"content": `<style>.cm742e8id {
  d: path("M13.1 18.5H2.5v-13h19v7M6 9.5h5.5m-5.5 5h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v9su0ib8z {
  d: path("M16.5 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-1.75 6.5c0-1.25 1.5-2.25 3.25-2.25s3.25 1 3.25 2.25");
}
</style><g class="ulnmmdpxh"><path class="cm742e8id"/><path class="v9su0ib8z"/></g>`,
		"fallback": "uix-sharp:cheque-payee",
	});
}

export default Component;
