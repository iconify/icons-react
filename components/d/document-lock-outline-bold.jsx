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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.gk315f5vo {
  d: path("M9 12h6v5.5H9Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tn8-gc8mv {
  d: path("M10 12a2 2 0 0 1 4 0");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="gk315f5vo"/><path class="tn8-gc8mv"/></g>`,
		"fallback": "iconmind:document-lock-outline-bold",
	});
}

export default Component;
