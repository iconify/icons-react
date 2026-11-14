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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ibzykkwne {
  d: path("m8.581 8.425l-1.9 2.586a2.63 2.63 0 0 0-.352 2.452l2.042 5.61a2.625 2.625 0 0 0 3.365 1.569l6.343-2.309a2.625 2.625 0 0 0 1.569-3.364l-2.042-5.611a2.63 2.63 0 0 0-1.846-1.652l-3.117-.76a2.63 2.63 0 0 0-1.519.084l-1.326.483a2.63 2.63 0 0 0-1.217.912");
}

.rhcy7vbcr {
  d: path("m9.339 5.285l.705-.256a1.125 1.125 0 0 1 1.442.672a1.125 1.125 0 0 1-.673 1.442l-.704.257a1.125 1.125 0 0 1-1.442-.673a1.125 1.125 0 0 1 .672-1.442");
}

.sr_yycbdi {
  d: path("m7.63 3.513l2.584-.941a1.125 1.125 0 0 1 1.442.673a1.125 1.125 0 0 1-.673 1.442l-2.584.94a1.125 1.125 0 0 1-1.442-.672a1.125 1.125 0 0 1 .673-1.442m2.235 10.892l5.638-2.052m-4.526 5.106l5.638-2.052");
}
</style><g class="hntgybcog"><path class="ibzykkwne"/><path class="rhcy7vbcr"/><path class="sr_yycbdi"/></g>`,
		"fallback": "uix:hot-water-bottle",
	});
}

export default Component;
