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
		"content": `<style>.q33yvx5je {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.321 17.745a7.5 7.5 0 1 1 0-11.49M4 10h9.5M4 14h9.5");
}
</style><path class="q33yvx5je"/>`,
		"fallback": "uix-sharp:euro-sign",
	});
}

export default Component;
