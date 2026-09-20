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
		"content": `<style>.ci868tbkg {
  d: path("M2 7h7");
}

.fbw2ldgtv {
  d: path("M12 10v7");
}

.n92hyrp1a {
  d: path("M9 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.pmuiqo95v {
  d: path("M2 17h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zc48m34dw {
  d: path("M15 7h7");
}
</style><g class="s0phu2bbs"><path class="n92hyrp1a"/><path class="ci868tbkg"/><path class="zc48m34dw"/><path class="fbw2ldgtv"/><path class="pmuiqo95v"/></g>`,
		"fallback": "iconmind:control-plane-outline-bold",
	});
}

export default Component;
