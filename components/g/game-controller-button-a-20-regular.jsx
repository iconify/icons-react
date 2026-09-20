import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i12gxccgb {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 1a7 7 0 1 0 0 14a7 7 0 0 0 0-14m0 2.5a.5.5 0 0 1 .464.314l3 7.5a.5.5 0 1 1-.928.371l-.875-2.187l-.018.002H8.5a.5.5 0 0 1-.152-.026l-.884 2.211a.5.5 0 1 1-.928-.37l3-7.5l.033-.069A.5.5 0 0 1 10 5.5m-1.262 5h2.524L10 7.345z");
}
</style><path class="i12gxccgb"/>`,
		"fallback": "fluent:game-controller-button-a-20-regular",
	});
}

export default Component;
