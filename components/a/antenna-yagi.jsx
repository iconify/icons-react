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
		"content": `<style>.ucm8_cc0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h18M3.5 3v12M8.75 4v10m6.5-9v8m5.25-7v6M12 9v12");
}
</style><path class="ucm8_cc0o"/>`,
		"fallback": "uix-sharp:antenna-yagi",
	});
}

export default Component;
