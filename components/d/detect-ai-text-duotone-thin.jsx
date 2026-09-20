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
		"content": `<style>.b_p1yjb2n {
  fill: currentColor;
  d: path("M12.5 16a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iwea3dacr {
  d: path("M12.5 16a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.nffgw9y5n {
  d: path("m19.5 19 2 2");
}

.u1mon9cdo {
  d: path("M3 15h9");
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="hntgybcog"><path class="b_p1yjb2n"/><path class="k6nj2fbya"/><path class="x50q_4bdr"/><path class="u1mon9cdo"/><path class="iwea3dacr"/><path class="nffgw9y5n"/></g>`,
		"fallback": "iconmind:detect-ai-text-duotone-thin",
	});
}

export default Component;
