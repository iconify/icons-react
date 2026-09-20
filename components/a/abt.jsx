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
		"content": `<style>.em-tch5kn {
  stop-color: var(--svg-color--06efa0, #06efa0);
}

.ft5dv1b6b {
  fill: none;
}

.k7ygukbev {
  fill-rule: evenodd;
  d: path("m12 3l8 4.5v9L12 21l-8-4.5v-9zm7.25 4.64l-7-3.936v7.874zm.25.423L12.5 12l7 3.937zm-.25 8.296l-7-3.937v7.875zm-7.5 3.938l-7-3.938l7-3.937zm0-8.72l-7-3.936l7-3.937zM4.5 8.064l7 3.937l-7 3.937z");
}

.nymso310x {
  stop-color: var(--svg-color--01fafc, #01fafc);
}

.o6hvl8vhe {
  d: path("m12 7.152l4.216 7.115L12 16.639l-4.216-2.371zm0 .975l-3.533 5.962L12 16.077l3.533-1.988z");
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGiBEQRd8j)" clip-rule="evenodd" class="k7ygukbev"/><path fill="url(#SVGY1fZkeZc)" class="o6hvl8vhe"/><defs><linearGradient id="SVGiBEQRd8j" x1="4.001" x2="19.999" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop class="em-tch5kn"/><stop offset="1" class="nymso310x"/></linearGradient><linearGradient id="SVGY1fZkeZc" x1="4" x2="19.999" y1="11.999" y2="11.999" gradientUnits="userSpaceOnUse"><stop class="em-tch5kn"/><stop offset="1" class="nymso310x"/></linearGradient></defs></g>`,
		"fallback": "token-branded:abt",
	});
}

export default Component;
