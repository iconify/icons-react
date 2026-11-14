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
		"content": `<style>.q70ehhbtk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h19v7h-19Zm6 0L6 5h12l-2.5 7.5M12 9h.01");
}
</style><path class="q70ehhbtk"/>`,
		"fallback": "uix-sharp:camera-hot-shoe",
	});
}

export default Component;
