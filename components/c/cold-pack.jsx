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
		"content": `<style>.mwn33o7jc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3h15a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm-1 4h17M12 10v9m-3.75-6.75l7.5 4.5m-7.5 0l7.5-4.5");
}
</style><path class="mwn33o7jc"/>`,
		"fallback": "uix-sharp:cold-pack",
	});
}

export default Component;
