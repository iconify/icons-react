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
		"content": `<style>.edg0x3nuq {
  d: path("m5 5 14 14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wvha8hh3o {
  d: path("M19 5 5 19");
}
</style><g class="nrj6p8qat"><path class="edg0x3nuq"/><path class="wvha8hh3o"/></g>`,
		"fallback": "iconmind:close-outline-regular",
	});
}

export default Component;
