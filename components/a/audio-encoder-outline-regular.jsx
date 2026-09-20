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
		"content": `<style>.dulwphh-b {
  d: path("m15.5 8 2.5 2.5 -2.5 2.5");
}

.go1co5b_o {
  d: path("M11 10.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o9uj508bp {
  d: path("M8.5 8 6 10.5 8.5 13");
}

.yomctlb4k {
  d: path("M7 17v4l4 -4");
}
</style><g class="nrj6p8qat"><path class="jq9hovbrs"/><path class="yomctlb4k"/><path class="o9uj508bp"/><path class="dulwphh-b"/><path class="go1co5b_o"/></g>`,
		"fallback": "iconmind:audio-encoder-outline-regular",
	});
}

export default Component;
