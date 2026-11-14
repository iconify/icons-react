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
		"content": `<style>.a9qmb2b7h {
  d: path("M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.bt2ootzqw {
  fill: currentColor;
  d: path("M3 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ngs276d9d {
  d: path("M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7-14h11m-11 7h11m-11 7h11");
}
</style><g class="hntgybcog"><path class="a9qmb2b7h"/><path class="bt2ootzqw"/><path class="ngs276d9d"/></g>`,
		"fallback": "uix:enum",
	});
}

export default Component;
