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
		"content": `<style>.jrph-kbuv {
  fill: currentColor;
  d: path("m12 4 4.5 4.5h-9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kchk9kbsh {
  d: path("M4 13.5h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o8od38cnm {
  d: path("M4 18h16");
}

.vms-s--ti {
  d: path("m12 4 4.5 4.5h-9Z");
}
</style><g class="nrj6p8qat"><path class="jrph-kbuv"/><path class="vms-s--ti"/><path class="kchk9kbsh"/><path class="o8od38cnm"/></g>`,
		"fallback": "iconmind:delta-table-duotone-regular",
	});
}

export default Component;
