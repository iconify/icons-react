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
		"content": `<style>.o9vb9iw7m {
  d: path("M10.5 11.5h11v8h-11Z");
}

.slfrgobzu {
  d: path("M6.5 10.5H4A1.5 1.5 0 0 1 2.5 9V4A1.5 1.5 0 0 1 4 2.5h8A1.5 1.5 0 0 1 13.5 4v3");
}

.t8p_wacyj {
  d: path("M6.5 7h11v8h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="slfrgobzu"/><path class="t8p_wacyj"/><path class="o9vb9iw7m"/></g>`,
		"fallback": "uix-sharp:compositing",
	});
}

export default Component;
