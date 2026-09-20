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
		"content": `<style>.ftq_9nbqu {
  fill: currentColor;
  d: path("M3 7v10h18V7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.it88l1wbh {
  d: path("M7 7v10");
}

.mmx7g9jzy {
  d: path("M3 7v10h18V7Z");
}

.qg37n0byb {
  d: path("M17 7v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w_jkatblo {
  d: path("M12 7v10");
}
</style><g class="s0phu2bbs"><path class="ftq_9nbqu"/><path class="mmx7g9jzy"/><path class="it88l1wbh"/><path class="w_jkatblo"/><path class="qg37n0byb"/></g>`,
		"fallback": "iconmind:film-roll-duotone-bold",
	});
}

export default Component;
