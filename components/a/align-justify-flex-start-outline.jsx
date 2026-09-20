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
		"content": `<style>.fwa4a0b9p {
  fill: currentColor;
  d: path("M3 21V3h1v18zm10.5-4.5v-9h2v9zm-6 0v-9h2v9z");
}
</style><path class="fwa4a0b9p"/>`,
		"fallback": "material-symbols-light:align-justify-flex-start-outline",
	});
}

export default Component;
