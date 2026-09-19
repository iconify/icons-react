import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z-_nm9h7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.391 43.5h-4.953c-6.96 0-12.603-5.643-12.603-12.603V18.364a3.78 3.78 0 0 1 3.78-3.781h12.687a3.78 3.78 0 0 1 3.78 3.78v11.35a3.78 3.78 0 0 1-3.78 3.78h-2.603a3.78 3.78 0 0 1-3.782-3.78V8.28a3.78 3.78 0 0 1 3.782-3.78h3.864c6.96 0 12.603 5.643 12.603 12.603v13.794");
}
</style><path class="z-_nm9h7h"/>`,
		"fallback": "arcticons:clipt",
	});
}

export default Component;
