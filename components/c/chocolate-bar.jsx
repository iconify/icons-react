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
		"content": `<style>.pwtl-db-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h14v17H5Zm0 5.75h14m-14 5.5h14M12 3.5v17");
}
</style><path class="pwtl-db-b"/>`,
		"fallback": "uix-sharp:chocolate-bar",
	});
}

export default Component;
