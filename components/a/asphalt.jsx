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
		"content": `<style>.q-7ccfbal {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3L3 21M15 3l6 18M12 4v2.5m0 3.5v3.5m0 3.5v4");
}
</style><path class="q-7ccfbal"/>`,
		"fallback": "uix-sharp:asphalt",
	});
}

export default Component;
