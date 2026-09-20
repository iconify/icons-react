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
		"content": `<style>.aj1uncbqw {
  d: path("M4 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.om9c7ck0x {
  d: path("M13 8h7");
}

.osdsz4bam {
  d: path("M13 14h5");
}

.t6kisabuh {
  fill: currentColor;
  d: path("M4 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y4-ssjnrw {
  d: path("M13 8v12");
}
</style><g class="nrj6p8qat"><path class="t6kisabuh"/><path class="aj1uncbqw"/><path class="y4-ssjnrw"/><path class="om9c7ck0x"/><path class="osdsz4bam"/></g>`,
		"fallback": "iconmind:degree-fahrenheit-duotone-regular",
	});
}

export default Component;
