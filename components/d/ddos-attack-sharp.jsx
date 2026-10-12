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
		"content": `<style>.f1wuhib_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 3.75h7.5v16.5h-7.5zM16.25 8h2.5m-2.5 4h2.5m-2.5 4h2.5m-16-9.5h7m-2.25-2l2.25 2l-2.25 2M2.75 12h7M7.5 10l2.25 2l-2.25 2m-4.75 3.5h7m-2.25-2l2.25 2l-2.25 2");
}
</style><path class="f1wuhib_p"/>`,
		"fallback": "iconoven:ddos-attack-sharp",
	});
}

export default Component;
