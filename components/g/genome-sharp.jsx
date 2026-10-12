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
		"content": `<style>.v20bd2wqm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.9 3.66l.2-.07L7.75 3l.59 1.65l2.07 5.7L11 12l-.59 1.65l-2.07 5.7L7.75 21l-1.65-.59l-.2-.07l-1.65-.59l.63-1.63l1.74-4.49l.63-1.63l-.63-1.63l-1.74-4.49l-.63-1.63zm12.2 0l-.2-.07L16.25 3l-.59 1.65l-2.07 5.7L13 12l.59 1.65l2.07 5.7l.59 1.65l1.65-.59l.2-.07l1.65-.59l-.63-1.63l-1.74-4.49l-.63-1.63l.63-1.63l1.74-4.49l.63-1.63zM5.3 7h3.9m5.6 0h3.9M5.3 17h3.9m5.6 0h3.9");
}
</style><path class="v20bd2wqm"/>`,
		"fallback": "iconoven:genome-sharp",
	});
}

export default Component;
