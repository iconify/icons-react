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
		"content": `<style>.f1um23b3l {
  d: path("M4 19h17");
}

.jor2cmbne {
  d: path("m6 16 4 -4 3 3 5 -5");
}

.r3-bp3bbk {
  d: path("M4 3v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="r3-bp3bbk"/><path class="f1um23b3l"/><path class="jor2cmbne"/></g>`,
		"fallback": "iconmind:elevation-outline-bold",
	});
}

export default Component;
