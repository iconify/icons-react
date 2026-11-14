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
		"content": `<style>.ndpbzw5mq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5H13m5 0h3.5m-8.5-5h5v10h-5Zm2.5 0v-3H19");
}
</style><path class="ndpbzw5mq"/>`,
		"fallback": "uix-sharp:barbell-collar",
	});
}

export default Component;
