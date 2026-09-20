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
		"content": `<style>.ffs26fbkv {
  d: path("M12 17v4");
}

.mqk-0xbiv {
  d: path("M16 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.neabk9byu {
  d: path("M2 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.quwwt_b4w {
  d: path("M16.5 9.5 14 12");
}

.tazaw9t8u {
  d: path("M7.5 9.5 10 12");
}

.zoz5ar7wf {
  d: path("M9 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="neabk9byu"/><path class="mqk-0xbiv"/><path class="zoz5ar7wf"/><path class="tazaw9t8u"/><path class="quwwt_b4w"/><path class="ffs26fbkv"/></g>`,
		"fallback": "iconmind:dep-graph-outline-regular",
	});
}

export default Component;
