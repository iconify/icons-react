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
		"content": `<style>.sncbxzbgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21v-1l10-7h9v8Zm10-8v8m-10-7l10-7M5 12.25v2.5m5-6v2.5");
}
</style><path class="sncbxzbgc"/>`,
		"fallback": "uix:accessibility-accommodation",
	});
}

export default Component;
