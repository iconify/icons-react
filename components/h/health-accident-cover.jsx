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
		"content": `<style>.nb0jp-n7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.161 15.889L15.889 3.161a1.5 1.5 0 0 1 2.121 0l2.829 2.829a1.5 1.5 0 0 1 0 2.121L8.111 20.839a1.5 1.5 0 0 1-2.121 0L3.161 18.01a1.5 1.5 0 0 1 0-2.121Zm4.596-4.596l4.95 4.95m-1.414-8.486l4.95 4.95");
}
</style><path class="nb0jp-n7k"/>`,
		"fallback": "uix-sharp:health-accident-cover",
	});
}

export default Component;
