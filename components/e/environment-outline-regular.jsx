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
		"content": `<style>.azyfb8wgh {
  d: path("m4 12 8 -8 8 8v8H4Z");
}

.fmlaifbpn {
  d: path("M12 16v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="azyfb8wgh"/><path class="fmlaifbpn"/></g>`,
		"fallback": "iconmind:environment-outline-regular",
	});
}

export default Component;
