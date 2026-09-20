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
		"content": `<style>.jlpxneb5g {
  d: path("M9 8v8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tee3b-ble {
  d: path("M10 12h11");
}

.tenhr0_oh {
  d: path("m6 9 3 3 -3 3 -3 -3Z");
}
</style><g class="s0phu2bbs"><path class="tenhr0_oh"/><path class="tee3b-ble"/><path class="jlpxneb5g"/></g>`,
		"fallback": "iconmind:breakpoint-conditional-outline-bold",
	});
}

export default Component;
