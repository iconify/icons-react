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
		"content": `<style>.bc8l9obif {
  d: path("m18 14l3.5 1.25v2.5c0 2-1.5 3.25-3.5 4c-2-.75-3.5-2-3.5-4v-2.5Z");
}

.c3nrjmbpl {
  d: path("m16.5 17.75l1 1l2-2.25");
}

.qwpnskbcl {
  d: path("M12.9 21.5H4.5v-17h12v7.1m-8-7.1v-2h4v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qwpnskbcl"/><path class="bc8l9obif"/><path class="c3nrjmbpl"/></g>`,
		"fallback": "uix-sharp:ev-battery-warranty",
	});
}

export default Component;
