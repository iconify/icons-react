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
		"content": `<style>.ity_4zkhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.061 4.061l4.878 4.878a1.5 1.5 0 0 1 0 2.122l-4.878 4.878a1.5 1.5 0 0 1-2.122 0l-4.878-4.878a1.5 1.5 0 0 1 0-2.122l4.878-4.878a1.5 1.5 0 0 1 2.122 0M12 17v4.5m-2.5-12h5m-2.5 0V14");
}
</style><path class="ity_4zkhh"/>`,
		"fallback": "uix:dead-end-trail",
	});
}

export default Component;
