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
		"content": `<style>.qzwyktr0h {
  fill: currentColor;
  d: path("M3 21V4h3V2h4v2h3v2h8v13h-8.038v2zm1-1h8v-2h8V7h-8V5H4zm5.423-3.192h1.539v-1.539H9.423zm0-7.077h1.539V8.192H9.423zm3.923 7.077h1.539v-1.539h-1.539zm0-7.077h1.539V8.192h-1.539zm3.923 7.077h1.539v-1.539h-1.539zm0-7.077h1.539V8.192h-1.539zM8 12.5");
}
</style><path class="qzwyktr0h"/>`,
		"fallback": "material-symbols-light:camera-roll-outline-sharp",
	});
}

export default Component;
