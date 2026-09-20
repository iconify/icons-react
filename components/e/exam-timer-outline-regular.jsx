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
		"content": `<style>.bdxedv3gx {
  d: path("M6 3v3l6 6 6 -6V3");
}

.i4nkkkbsh {
  d: path("M6 21v-3l6 -6 6 6v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rjrs_5bsc {
  d: path("M6 3h12");
}

.xslfg2evh {
  d: path("M6 21h12");
}
</style><g class="nrj6p8qat"><path class="rjrs_5bsc"/><path class="xslfg2evh"/><path class="bdxedv3gx"/><path class="i4nkkkbsh"/></g>`,
		"fallback": "iconmind:exam-timer-outline-regular",
	});
}

export default Component;
