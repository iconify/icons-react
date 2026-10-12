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
		"content": `<style>.mfenybcop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.5V2.75H7.5m9 0h4.75V7.5m0 9v4.75H16.5m-9 0H2.75V16.5M6.5 16v-3.5a5.5 5.5 0 0 1 11 0v2M9.25 18v-5.5a2.75 2.75 0 0 1 5.5 0V17M12 12.5v6");
}
</style><path class="mfenybcop"/>`,
		"fallback": "iconoven:biometric-scan-sharp",
	});
}

export default Component;
