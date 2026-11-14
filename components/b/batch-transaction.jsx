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
		"content": `<style>.pi_3pdbah {
  d: path("M8.5 4h11a2 2 0 0 1 2 2v8M9 10v10");
}

.qfi76c80d {
  d: path("M5.5 7h11a2 2 0 0 1 2 2v8");
}

.qlnlfob5e {
  d: path("M2.5 10h13v10h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qlnlfob5e"/><path class="qfi76c80d"/><path class="pi_3pdbah"/></g>`,
		"fallback": "uix-sharp:batch-transaction",
	});
}

export default Component;
