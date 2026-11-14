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
		"content": `<style>.phjljp91o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9H15v10H2.5ZM15 11.5L21.5 9v9.5L15 16ZM5 9V6h7.5v3");
}
</style><path class="phjljp91o"/>`,
		"fallback": "uix-sharp:cinema-camera",
	});
}

export default Component;
