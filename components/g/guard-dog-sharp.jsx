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
		"content": `<style>.fdgleknxc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 10h.01");
}

.fec6d0rij {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 18.25h7.75");
}

.swx5hqb0o {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.25V14.5l-2.25-1.875V9.5l.75-6l3.25 3H14l1.75 1.75l1.5 1.5h4v4.5H15.5l-1.25 1.5v5.5Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="swx5hqb0o"/><path class="fdgleknxc"/><path class="fec6d0rij"/></g>`,
		"fallback": "iconoven:guard-dog-sharp",
	});
}

export default Component;
