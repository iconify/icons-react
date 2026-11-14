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
		"content": `<style>.amfmfs6ya {
  d: path("M2.5 2.5H14V14H2.5Z");
}

.e_gp7hbps {
  fill: currentColor;
  d: path("M10 10h4v4h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yaq__qb3d {
  d: path("M10 10h11.5v11.5H10ZM2.5 6.25H14M14 14h7.5");
}
</style><g class="ulnmmdpxh"><path class="amfmfs6ya"/><path class="yaq__qb3d"/><path class="e_gp7hbps"/></g>`,
		"fallback": "uix-sharp:database-join",
	});
}

export default Component;
