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

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x1_r36phd {
  d: path("M9 12h6");
}

.zm2dyvb-o {
  d: path("M9 16h6");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="x1_r36phd"/><path class="zm2dyvb-o"/></g>`,
		"fallback": "iconmind:document-outline-bold",
	});
}

export default Component;
