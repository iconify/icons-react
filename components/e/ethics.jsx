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
		"content": `<style>.shyg5_aiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4v16.5m-6.5-13h13M8 20.5h8M2.5 14l3-6.5l3 6.5a3 3 0 0 1-6 0m13 0l3-6.5l3 6.5a3 3 0 0 1-6 0");
}
</style><path class="shyg5_aiv"/>`,
		"fallback": "uix:ethics",
	});
}

export default Component;
