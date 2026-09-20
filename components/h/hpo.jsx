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
		"content": `<style>.f20p0qbhq {
  fill: var(--svg-color--000, #000);
  d: path("M13.589 10.412V3h-3.177v7.412zm0 3.176v-3.176H21v3.176zm0 0V21h-3.177v-7.412z");
}

.f2uqn3bht {
  fill: var(--svg-color--106bff, #106bff);
  d: path("M3 10.41h7.412v3.177H3z");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="f20p0qbhq"/><path class="f2uqn3bht"/></g>`,
		"fallback": "token-branded:hpo",
	});
}

export default Component;
