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
		"content": `<style>.cjxhp8xmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.6 21.5H4.5v-19h15v10.1M8.5 2.5v19m3-14.5h4m0 8.5l5 5m0-5l-5 5");
}
</style><path class="cjxhp8xmy"/>`,
		"fallback": "uix-sharp:account-closed",
	});
}

export default Component;
