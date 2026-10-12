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
		"content": `<style>.saw8itbdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.47 3.12l6.31 5.01l.47.37v4.25H4.75V8.5l.47-.37l6.31-5.01l.47-.37zM2.75 16.75q2.31-2 4.63 0t4.63 0t4.63 0t4.63 0m-18.52 3.5q2.31-2 4.63 0t4.63 0t4.63 0t4.63 0");
}
</style><path class="saw8itbdu"/>`,
		"fallback": "iconoven:flood-sharp",
	});
}

export default Component;
