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
		"content": `<style>.mwg8pgbcw {
  d: path("M11 10.5v2h1.75m-1.75 5v1a2.5 2.5 0 0 0 2.5 2.5h8");
}

.r4tzxzl2o {
  d: path("M2.5 4.5H11v3M6 2v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zusf7zbxz {
  d: path("M6 12.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}
</style><g class="ulnmmdpxh"><path class="r4tzxzl2o"/><path class="zusf7zbxz"/><path class="mwg8pgbcw"/></g>`,
		"fallback": "uix-sharp:hose-timer",
	});
}

export default Component;
