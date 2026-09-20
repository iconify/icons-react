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
		"content": `<style>.ae0h5kb0o {
  d: path("M9 15h6");
}

.jfvoq9bhn {
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5 2.5 2.5 0 0 1 19.5 7h-15A2.5 2.5 0 0 1 2 4.5");
}

.lds96gber {
  d: path("M4 12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="jfvoq9bhn"/><path class="lds96gber"/><path class="ae0h5kb0o"/></g>`,
		"fallback": "iconmind:archive-outline-bold",
	});
}

export default Component;
