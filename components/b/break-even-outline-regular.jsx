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
		"content": `<style>.l0kkv4bte {
  d: path("M7 17 17 7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.ta4mqebfu {
  d: path("m7 9 8 8");
}
</style><g class="nrj6p8qat"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="l0kkv4bte"/><path class="ta4mqebfu"/></g>`,
		"fallback": "iconmind:break-even-outline-regular",
	});
}

export default Component;
