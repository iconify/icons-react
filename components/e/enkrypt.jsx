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
		"content": `<style>.wolr4w3sk {
  fill: var(--svg-color--c54aff, #c54aff);
  fill-rule: evenodd;
  d: path("M3 6.464A3.464 3.464 0 0 1 6.464 3H21v2.658a2.49 2.49 0 0 1-2.49 2.49h-6.834a3.464 3.464 0 0 0-3.464 3.463v.881a3.464 3.464 0 0 0 3.464 3.464h6.834a2.49 2.49 0 0 1 2.49 2.49V21H6.464A3.464 3.464 0 0 1 3 17.536zm8.826 3.132h7.01c1.195 0 2.164.97 2.164 2.165v.582c0 1.196-.97 2.165-2.165 2.165h-7.01a2.165 2.165 0 0 1-2.164-2.165v-.582c0-1.196.969-2.165 2.165-2.165");
}
</style><path clip-rule="evenodd" class="wolr4w3sk"/>`,
		"fallback": "token-branded:enkrypt",
	});
}

export default Component;
