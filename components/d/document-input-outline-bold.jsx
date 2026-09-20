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

.t407ddc6o {
  d: path("M3 12h8");
}

.tvcifwtpi {
  d: path("M8.5 9.5 11 12l-2.5 2.5");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="t407ddc6o"/><path class="tvcifwtpi"/></g>`,
		"fallback": "iconmind:document-input-outline-bold",
	});
}

export default Component;
