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
		"content": `<style>.djrbdzb4k {
  d: path("m9.5 7l3 4l-3 4l-3-4Zm5 11a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm1 2.5l5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vcwp8hbvu {
  d: path("M11.9 19.5H3.5v-17h12v9.7");
}
</style><g class="ulnmmdpxh"><path class="vcwp8hbvu"/><path class="djrbdzb4k"/></g>`,
		"fallback": "uix-sharp:ban-pick",
	});
}

export default Component;
