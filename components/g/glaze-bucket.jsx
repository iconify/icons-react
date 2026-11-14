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
		"content": `<style>.daleljbad {
  d: path("M5 8.5h14L17.5 21h-11Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mpals-bsz {
  d: path("M12 14.5a6 6 0 0 1 0-12");
}

.xkke1y1fe {
  d: path("M5.25 11.5H9.5V15a1.25 1.25 0 0 0 2.5 0v-3.5h6.75");
}
</style><g class="hntgybcog"><path class="daleljbad"/><path class="mpals-bsz"/><path class="xkke1y1fe"/></g>`,
		"fallback": "uix:glaze-bucket",
	});
}

export default Component;
