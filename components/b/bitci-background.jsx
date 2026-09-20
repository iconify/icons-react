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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.nkxt_8-ix {
  fill: var(--svg-color--ff4802, #ff4802);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.zxg-kcb0i {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M7.501 4h2.5v.5h1.5V4h2.5v.51a3.75 3.75 0 0 1 1.89 6.82a4.25 4.25 0 0 1-1.64 8.17h-.25v.5h-2.5v-.5h-1.5v.5h-2.5v-.5h-2l3-3.5h-1.5V8h1.5l-3-3.5h2zm2.5 3.5h2.5a1.5 1.5 0 0 1 0 3h-2.5zm0 5.5h3.75a1.75 1.75 0 1 1 0 3.5h-3.75z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="nkxt_8-ix"/><path clip-rule="evenodd" class="zxg-kcb0i"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:bitci-background",
	});
}

export default Component;
