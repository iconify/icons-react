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
		"content": `<style>.lex5-bfah {
  d: path("M14.75 17v-1.75h1.75m2.5 0h1.75V17");
}

.ls0vd7buj {
  d: path("M10 6.5L7.5 9l2.5 2.5m4-5L16.5 9L14 11.5m3.75 10v-3l-3-3.25m3 3.25l3-3.25");
}

.stlysdbwc {
  d: path("M14.9 21.5H4.5v-19h15v9.9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="stlysdbwc"/><path class="ls0vd7buj"/><path class="lex5-bfah"/></g>`,
		"fallback": "uix-sharp:code-splitting",
	});
}

export default Component;
