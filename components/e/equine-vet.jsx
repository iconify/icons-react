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
		"content": `<style>.spfugabqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.202 20.5H10c0-2.25-.5-3.75-1.5-5L6 16c-2 .5-3.25-.75-3-2.5l.25-1L9 5.75L10.75 5l1.5-2.5l2 3c2.755.984 4.426 3.517 5.012 6.745M10.5 8.75h.01M18 15v6m-3-3h6");
}
</style><path class="spfugabqx"/>`,
		"fallback": "uix-sharp:equine-vet",
	});
}

export default Component;
