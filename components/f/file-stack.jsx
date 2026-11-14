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
		"content": `<style>.j208-7b0m {
  d: path("M6 18V7a2 2 0 0 1 2-2h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_xvn4b0c {
  d: path("M3 15V4.5a2 2 0 0 1 2-2h5.5m5 5V10a1.5 1.5 0 0 0 1.5 1.5h2.5");
}

.vqljyxdgk {
  d: path("M11 7.5h4.5l4 4v8a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2Z");
}
</style><g class="ulnmmdpxh"><path class="vqljyxdgk"/><path class="j208-7b0m"/><path class="v_xvn4b0c"/></g>`,
		"fallback": "uix-sharp:file-stack",
	});
}

export default Component;
