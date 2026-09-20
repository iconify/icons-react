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
		"content": `<style>.akf7y5bsb {
  d: path("M8 7h8v4H8Z");
}

.c3a-odz8a {
  d: path("M12 18.5V21");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rr985ibot {
  d: path("M12 3v2.5");
}

.xgyiae7-j {
  d: path("M9.5 14h5v4h-5Z");
}
</style><g class="nrj6p8qat"><path class="rr985ibot"/><path class="c3a-odz8a"/><path class="akf7y5bsb"/><path class="xgyiae7-j"/></g>`,
		"fallback": "iconmind:align-center-vertical-outline-regular",
	});
}

export default Component;
