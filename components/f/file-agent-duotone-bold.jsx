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
		"content": `<style>.g5gif86zm {
  d: path("M19 12h-6v9h9v-6");
}

.jt4-jw3vg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.zguk0dn8r {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 12h-6v9h9v-6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="jt4-jw3vg"/><path class="zguk0dn8r"/><path class="skbifdbcx"/><path class="g5gif86zm"/></g>`,
		"fallback": "iconmind:file-agent-duotone-bold",
	});
}

export default Component;
