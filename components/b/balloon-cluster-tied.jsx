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
		"content": `<style>.fvbq8_bvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.75c-2.25 0-2.75-2-2.75-3.75a2.75 2.75 0 0 1 5.5 0c0 1.75-.5 3.75-2.75 3.75Zm0 0l-.75 1h1.5Zm-6.75 5c-2.25 0-2.75-2-2.75-3.75A2.75 2.75 0 0 1 8 10c0 1.75-.5 3.75-2.75 3.75Zm0 0l-.75 1H6Zm13.5 0c-2.25 0-2.75-2-2.75-3.75a2.75 2.75 0 0 1 5.5 0c0 1.75-.5 3.75-2.75 3.75Zm0 0l-.75 1h1.5ZM9.5 18h5v3h-5Zm-4.25-3.25L12 18m0-8.25V18m6.75-3.25L12 18");
}
</style><path class="fvbq8_bvw"/>`,
		"fallback": "uix-sharp:balloon-cluster-tied",
	});
}

export default Component;
