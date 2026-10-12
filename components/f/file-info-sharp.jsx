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
		"content": `<style>.kfu9m_bqb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 2.75v5.5h5.5m-8.25 5h1V18m-1.25 0h2.5");
}

.pskqlzbih {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11.75 10.75h.01");
}

.s43l187bp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="s43l187bp"/><path class="kfu9m_bqb"/><path class="pskqlzbih"/></g>`,
		"fallback": "iconoven:file-info-sharp",
	});
}

export default Component;
