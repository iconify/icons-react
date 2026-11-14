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
		"content": `<style>.mfuzlg8fv {
  d: path("M18.867 14.492a3.5 3.5 0 1 1-5.734 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wxtr2r21t {
  d: path("M6.5 10.5V21m-4-18.5h8v8h-8Zm2.25 4h3.5m6.25 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm1.5 2.75v3.25h3.5L21 19");
}
</style><g class="ulnmmdpxh"><path class="wxtr2r21t"/><path class="mfuzlg8fv"/></g>`,
		"fallback": "uix-sharp:accessible-bus-stop",
	});
}

export default Component;
