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
		"content": `<style>.xcaw1rmdm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h6.5v6.5h-6.5zM7 9.25v12m5.75-12.5h8.5v10h-8.5zm0 4h8.5m-6.25 6v2m4-2v2");
}
</style><path class="xcaw1rmdm"/>`,
		"fallback": "iconoven:bus-stop-sharp",
	});
}

export default Component;
