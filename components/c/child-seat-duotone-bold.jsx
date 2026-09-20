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
		"content": `<style>.aqbxq2hqn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 15h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dhw73cmjs {
  d: path("M6 21V6l3 -3h7v12h3v6");
}

.phi1ncbih {
  d: path("M6 15h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u90yj6b5d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 21V6l3 -3h7v12h3v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="u90yj6b5d"/><path class="aqbxq2hqn"/><path class="dhw73cmjs"/><path class="phi1ncbih"/></g>`,
		"fallback": "iconmind:child-seat-duotone-bold",
	});
}

export default Component;
