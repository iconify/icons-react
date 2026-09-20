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
		"content": `<style>.d2jiu7bqo {
  d: path("m7 15 2 -2 2 2 2 -2");
}

.gzqe0db9p {
  d: path("m15 15 4 -4");
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
</style><g class="nrj6p8qat"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="d2jiu7bqo"/><path class="gzqe0db9p"/></g>`,
		"fallback": "iconmind:downsample-outline-regular",
	});
}

export default Component;
