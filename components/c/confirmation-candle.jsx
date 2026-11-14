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
		"content": `<style>.pj7l3fbvm {
  d: path("M9.5 12.75V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3.75m-5 2.5v6.25h5v-6.25M12 2.5c1.75 2 1.25 2.75 0 2.75s-1.75-.75 0-2.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yy4vufhpm {
  d: path("m12 14l-6-3v6Zm0 0l6-3v6Z");
}
</style><g class="ulnmmdpxh"><path class="pj7l3fbvm"/><path class="yy4vufhpm"/></g>`,
		"fallback": "uix-sharp:confirmation-candle",
	});
}

export default Component;
