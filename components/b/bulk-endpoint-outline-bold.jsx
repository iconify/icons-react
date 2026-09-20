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
		"content": `<style>.d1t4ffbbq {
  d: path("M8 12.5h8");
}

.g5avrpbyu {
  d: path("M8 5.5h8");
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="n0n63pb2v"/><path class="g5avrpbyu"/><path class="pty_wsbvs"/><path class="d1t4ffbbq"/></g>`,
		"fallback": "iconmind:bulk-endpoint-outline-bold",
	});
}

export default Component;
