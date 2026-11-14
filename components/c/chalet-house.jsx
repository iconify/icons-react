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
		"content": `<style>.ek02avbdz {
  d: path("M10 21v-4.5h4V21");
}

.mdt0ajbdf {
  d: path("M6 8.5V21h12V8.5");
}

.rzh7fcbkh {
  d: path("M2.5 12L12 2.5l9.5 9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rzh7fcbkh"/><path class="mdt0ajbdf"/><path class="ek02avbdz"/></g>`,
		"fallback": "uix-sharp:chalet-house",
	});
}

export default Component;
