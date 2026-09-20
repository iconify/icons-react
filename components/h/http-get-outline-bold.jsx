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
		"content": `<style>.bfi7-obrv {
  d: path("M9.5 11.5 12 14l2.5 -2.5");
}

.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.q8d90--8n {
  d: path("M12 8.5V14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="q8d90--8n"/><path class="bfi7-obrv"/></g>`,
		"fallback": "iconmind:http-get-outline-bold",
	});
}

export default Component;
