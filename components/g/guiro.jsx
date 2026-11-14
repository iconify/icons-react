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
		"content": `<style>.fm9ehsiiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14a8.5 5 0 1 0 17 0a8.5 5 0 1 0-17 0Zm5.5-2v4m3-4v4m3-4v4M3 4l18 4");
}
</style><path class="fm9ehsiiy"/>`,
		"fallback": "uix-sharp:guiro",
	});
}

export default Component;
