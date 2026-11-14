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
		"content": `<style>.gdayd6cqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5h18L14 15v6h-4v-6Zm5.5-3.75h.01M12 3h.01m3.49 1.75h.01");
}
</style><path class="gdayd6cqz"/>`,
		"fallback": "uix-sharp:funnel-top",
	});
}

export default Component;
