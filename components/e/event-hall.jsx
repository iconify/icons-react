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
		"content": `<style>.jij6jzbts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 7.5l9.5-5l9.5 5Zm0 14V19h2v-2.5h15V19h2v2.5Zm4-14v9m5.5-9v9m5.5-9v9");
}
</style><path class="jij6jzbts"/>`,
		"fallback": "uix-sharp:event-hall",
	});
}

export default Component;
