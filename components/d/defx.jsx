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

.ikxc1zjjo {
  stop-color: var(--svg-color--4ba69b, #4ba69b);
}

.kqhyhdb0t {
  d: path("m7.725 6.6l4.208 2.565L16.328 6.6L21 9.287v5.458L16.334 17.4l-4.406-2.42l-4.203 2.42L3 14.745V9.287zm8.1 9.64v-3.938l-7.65-4.496v3.91zm-8.55-4.528V7.77L3.9 9.764v4.027zm-2.925 2.79L7.752 16.5l3.348-2.007l-3.375-2.043zm12.375-2.21v3.934l3.375-1.953v-4.028zm2.925-2.767L16.329 7.5L12.9 9.525l3.429 1.949z");
}

.lb7utqbjl {
  stop-color: var(--svg-color--2d73ba, #2d73ba);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGQqYLmsUg)" class="kqhyhdb0t"/><defs><linearGradient id="SVGQqYLmsUg" x1="21.032" x2="3" y1="12.023" y2="12.023" gradientUnits="userSpaceOnUse"><stop class="lb7utqbjl"/><stop offset="1" class="ikxc1zjjo"/></linearGradient></defs></g>`,
		"fallback": "token-branded:defx",
	});
}

export default Component;
