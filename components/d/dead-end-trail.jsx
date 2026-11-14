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
		"content": `<style>.ls628ubbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l7 7l-7 7l-7-7Zm0 14v4.5m-2.5-12h5m-2.5 0V14");
}
</style><path class="ls628ubbn"/>`,
		"fallback": "uix-sharp:dead-end-trail",
	});
}

export default Component;
