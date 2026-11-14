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
		"content": `<style>.j6a3m7k5m {
  d: path("M12 3s-6.5 7-6.5 11.5a6.5 6.5 0 0 0 13 0C18.5 10 12 3 12 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wyjbxnbcb {
  d: path("M9 15a3 3 0 0 0 3 3");
}
</style><g class="ulnmmdpxh"><path class="j6a3m7k5m"/><path class="wyjbxnbcb"/></g>`,
		"fallback": "uix-sharp:blood-drop",
	});
}

export default Component;
