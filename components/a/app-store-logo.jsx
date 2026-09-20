import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tsi7ddbed {
  fill: currentColor;
  d: path("m64.34 196.07l-9.45 16a8 8 0 1 1-13.78-8.14l9.46-16a8 8 0 1 1 13.77 8.14M232 152h-47.8l-30.73-52a8 8 0 1 0-13.77 8.14l61.41 103.93a8 8 0 0 0 13.78-8.14L193.66 168H232a8 8 0 0 0 0-16m-89.53 0H90.38l68.51-115.93a8 8 0 0 0-13.78-8.14L128 56.89l-17.11-29a8 8 0 1 0-13.78 8.14l21.6 36.55L71.8 152H24a8 8 0 0 0 0 16h118.47a8 8 0 1 0 0-16");
}
</style><path class="tsi7ddbed"/>`,
		"fallback": "ph:app-store-logo",
	});
}

export default Component;
