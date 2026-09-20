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
		"content": `<style>.bswpu5b0n {
  d: path("M8 11V4h8v7");
}

.gd3gqxb-h {
  d: path("M6 11v9h12v-9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xat4txb_y {
  d: path("m6 11 6 6 6 -6");
}
</style><g class="nrj6p8qat"><path class="gd3gqxb-h"/><path class="xat4txb_y"/><path class="bswpu5b0n"/></g>`,
		"fallback": "iconmind:event-invite-outline-regular",
	});
}

export default Component;
