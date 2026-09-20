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
		"content": `<style>.b5ic9acln {
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
}

.gtlfk7rgu {
  fill: currentColor;
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ocmla0jdf {
  d: path("M9 9h6v6H9Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ut71qqbez {
  fill: currentColor;
  d: path("M9 9h6v6H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="gtlfk7rgu"/><path class="ut71qqbez"/><path class="b5ic9acln"/><path class="ocmla0jdf"/></g>`,
		"fallback": "iconmind:collection-vector-duotone-bold",
	});
}

export default Component;
