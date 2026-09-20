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
		"content": `<style>.ef5tcc6_c {
  d: path("M4 16h14");
}

.f50v0cimy {
  d: path("M18 7v14");
}

.s_uvnuivb {
  d: path("M4 7v14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uhty14kih {
  d: path("M11 7v14");
}

.v5d935don {
  d: path("M4 11h14");
}
</style><g class="s0phu2bbs"><path class="s_uvnuivb"/><path class="uhty14kih"/><path class="f50v0cimy"/><path class="v5d935don"/><path class="ef5tcc6_c"/></g>`,
		"fallback": "iconmind:fence-outline-bold",
	});
}

export default Component;
