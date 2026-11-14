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
		"content": `<style>.otldlnbuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 18V5l2-2l2 2l2-2l2 2l2-2l2 2v13M6.5 18h15v3.5h-15ZM12 5v13m4-13v13M2.5 7l2.75 2M2.5 11.5l2.75 2");
}
</style><path class="otldlnbuc"/>`,
		"fallback": "uix-sharp:blast-fence",
	});
}

export default Component;
