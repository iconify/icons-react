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
		"content": `<style>.a7h45wbtv {
  d: path("M15.5 8.5 18 6l2.5 2.5");
}

.fce-vbb2c {
  d: path("M10.11 9.47a5 5 0 1 1 -4.22 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z6s_w0bbl {
  d: path("M18 8v11");
}
</style><g class="s0phu2bbs"><path class="fce-vbb2c"/><path class="z6s_w0bbl"/><path class="a7h45wbtv"/></g>`,
		"fallback": "iconmind:deploy-agent-outline-bold",
	});
}

export default Component;
