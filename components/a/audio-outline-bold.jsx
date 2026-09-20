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
		"content": `<style>.nj-oiubfo {
  d: path("M8 7v10");
}

.om2raabrv {
  d: path("M20 10v4");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sunqexbsa {
  d: path("M16 7v10");
}

.w74_pkbuu {
  d: path("M4 10v4");
}
</style><g class="s0phu2bbs"><path class="w74_pkbuu"/><path class="nj-oiubfo"/><path class="r7xk8o29f"/><path class="sunqexbsa"/><path class="om2raabrv"/></g>`,
		"fallback": "iconmind:audio-outline-bold",
	});
}

export default Component;
