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
		"content": `<style>.f3m52sbxg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8.5H15L17 6h4.25v6.75H17.5V16H3.25V8.5zM6 16v5.25M9.25 16v5.25M12.5 16v5.25m3-5.25v5.25M17.75 6l-.5-2.25m-14 6.5l-.5 3.25");
}

.jswk-ibrx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 8.5h5c0 2.25-1.1 3.75-2.5 3.75s-2.5-1.5-2.5-3.75Z");
}

.qir7ovodz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19.25 8.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="f3m52sbxg"/><path class="jswk-ibrx"/><path class="qir7ovodz"/></g>`,
		"fallback": "iconoven:cow-farm-sharp",
	});
}

export default Component;
