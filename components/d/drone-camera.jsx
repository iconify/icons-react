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
		"content": `<style>.in3h2n_cu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6.5h7V11h-7Zm-4 2.25h4m7 0h4m-15 0V5.5m15 3.25V5.5M2 5.5h5m10 0h5M12 11v2.5m-3 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="in3h2n_cu"/>`,
		"fallback": "uix-sharp:drone-camera",
	});
}

export default Component;
