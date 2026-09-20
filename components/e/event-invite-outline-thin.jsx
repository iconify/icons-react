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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xat4txb_y {
  d: path("m6 11 6 6 6 -6");
}
</style><g class="hntgybcog"><path class="gd3gqxb-h"/><path class="xat4txb_y"/><path class="bswpu5b0n"/></g>`,
		"fallback": "iconmind:event-invite-outline-thin",
	});
}

export default Component;
