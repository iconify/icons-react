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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.gszt4zbvr {
  d: path("M22 16.5C22 19.5376 19.5376 22 16.5 22C13.4624 22 11 19.5376 11 16.5C11 13.4624 13.4624 11 16.5 11C19.5376 11 22 13.4624 22 16.5ZM16 14.5L16 17L18.5 17");
}

.p1mda4bpf {
  stroke-opacity: 0.4;
  d: path("M8.34 21.3061C4.515 19.8018 2 16.1102 2 12C2 6.4772 6.4772 2 12 2C16.1102 2 19.8018 4.515 21.3061 8.34M2 12L8 12C8 8.5 9.3333 5 12 2C13.3827 3.5555 14.4069 5.2454 15.0726 7L15.3721 7.7895");
}
</style><g class="gp_8x1bzb"><path class="p1mda4bpf"/><path class="gszt4zbvr"/></g>`,
		"fallback": "keyline-icons:globe-clock-sharp-duotone",
	});
}

export default Component;
