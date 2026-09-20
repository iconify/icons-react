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
		"content": `<style>.fgqk6gbgn {
  d: path("M2.4 16a6.6 6.6 0 0 1 13.2 0");
}

.jy2rzibrh {
  d: path("M6 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qh6hkcycj {
  d: path("m15 16 2 2 4 -4");
}
</style><g class="nrj6p8qat"><path class="jy2rzibrh"/><path class="fgqk6gbgn"/><path class="qh6hkcycj"/></g>`,
		"fallback": "iconmind:attending-outline-regular",
	});
}

export default Component;
