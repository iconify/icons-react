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
		"content": `<style>.mzsqplboh {
  d: path("M5 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4gve_jid {
  d: path("m8 21l4-11l4 11");
}

.z0k0x6_ag {
  d: path("M10.75 10a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM12 3v14m-7-7h14M7 5l10 10m0-10L7 15");
}
</style><g class="ulnmmdpxh"><path class="mzsqplboh"/><path class="z0k0x6_ag"/><path class="v4gve_jid"/></g>`,
		"fallback": "uix-sharp:ferris-wheel",
	});
}

export default Component;
