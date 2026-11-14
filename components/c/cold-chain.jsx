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
		"content": `<style>.ev03x3dyg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 20.5H3.5v-17h17v9.3M3.5 9h17M12 3.5V9m3 9h6m-4.5-2.5l3 5m-3 0l3-5");
}
</style><path class="ev03x3dyg"/>`,
		"fallback": "uix-sharp:cold-chain",
	});
}

export default Component;
