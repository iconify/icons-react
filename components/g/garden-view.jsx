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
		"content": `<style>.l9f-x9b6f {
  d: path("M4 3h16v16.5H4ZM2.5 19.5h19");
}

.qj98ee9vm {
  d: path("M8.5 11.5a2.5 2.5 0 0 1 .75-4.75a3 3 0 0 1 5.5 0a2.5 2.5 0 0 1 .75 4.75Zm3.5 0v8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l9f-x9b6f"/><path class="qj98ee9vm"/></g>`,
		"fallback": "uix-sharp:garden-view",
	});
}

export default Component;
