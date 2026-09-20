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
		"content": `<style>.gt9_8_ujb {
  fill: var(--svg-color--1b14dc, #1b14dc);
  d: path("M11.5 18V3l-6 3.55V18zm7-12h-6v15l6-3.55z");
}
</style><path class="gt9_8_ujb"/>`,
		"fallback": "token-branded:idle",
	});
}

export default Component;
