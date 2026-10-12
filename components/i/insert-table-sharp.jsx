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
		"content": `<style>.xvpw2t3lu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h12v12h-12zm0 4.5h12m-6 0v7.5m9.5.5v6m-3-3h6");
}
</style><path class="xvpw2t3lu"/>`,
		"fallback": "iconoven:insert-table-sharp",
	});
}

export default Component;
