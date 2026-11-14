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
		"content": `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.q9_6qwodb {
  d: path("M14 10h5v11h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6h3a1xrk {
  fill: currentColor;
  d: path("M6 3h5v18H6Z");
}
</style><g class="ulnmmdpxh"><path class="bos0j4biy"/><path class="v6h3a1xrk"/><path class="q9_6qwodb"/></g>`,
		"fallback": "uix-sharp:assets-column",
	});
}

export default Component;
