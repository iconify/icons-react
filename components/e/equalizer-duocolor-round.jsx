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
		"content": `<style>.i0tz3zvbq {
  stroke-opacity: 0.4;
  d: path("M4 15h4m2-6h4m2 4h4");
}

.kjliana8i {
  d: path("M6 3v8m0 4v6m6-18v2m0 4v12m6-18v6m0 4v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="i0tz3zvbq"/><path class="kjliana8i"/></g>`,
		"fallback": "coolicons:equalizer-duocolor-round",
	});
}

export default Component;
