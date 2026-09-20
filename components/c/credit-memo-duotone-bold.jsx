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
		"content": `<style>.csyuhrrop {
  d: path("M5 14V3h14v11");
}

.e10hmz-ui {
  fill: currentColor;
  d: path("M2 11v10h20V11L12 21Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.nreq_9ofo {
  d: path("M2 11v10h20V11L12 21Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="e10hmz-ui"/><path class="nreq_9ofo"/><path class="csyuhrrop"/><path class="jlfjgzbqx"/></g>`,
		"fallback": "iconmind:credit-memo-duotone-bold",
	});
}

export default Component;
