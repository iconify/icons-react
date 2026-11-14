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
		"content": `<style>.acw9ntb4w {
  d: path("M8.5 8.5h13V21h-13Z");
}

.iu-ythrah {
  d: path("M2.5 15V4.5a2 2 0 0 1 2-2h11m-7 16L12 15l3 3m1.25-5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.mc-7q6bbm {
  d: path("M5.5 18V7.5a2 2 0 0 1 2-2h11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="acw9ntb4w"/><path class="mc-7q6bbm"/><path class="iu-ythrah"/></g>`,
		"fallback": "uix-sharp:image-multiple",
	});
}

export default Component;
