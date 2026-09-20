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

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r3-bp3bbk {
  d: path("M4 3v16");
}
</style><g class="nrj6p8qat"><path class="r3-bp3bbk"/><path class="f1um23b3l"/><path class="jor2cmbne"/></g>`,
		"fallback": "iconmind:elevation-outline-regular",
	});
}

export default Component;
