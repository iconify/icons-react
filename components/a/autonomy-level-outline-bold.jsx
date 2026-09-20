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
		"content": `<style>.gquwhbknj {
  d: path("M6 5v3");
}

.r15cr0b9g {
  d: path("M10 15a2 2 0 0 1 2 -2 2 2 0 0 1 2 2 2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.slxnpv8ya {
  d: path("M18 5v3");
}

.uokpg3btu {
  d: path("M12 5v3");
}

.yngda3bvc {
  d: path("M3 15h18");
}
</style><g class="s0phu2bbs"><path class="gquwhbknj"/><path class="uokpg3btu"/><path class="slxnpv8ya"/><path class="yngda3bvc"/><path class="r15cr0b9g"/></g>`,
		"fallback": "iconmind:autonomy-level-outline-bold",
	});
}

export default Component;
