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
		"content": `<style>.ay5js5b-p {
  fill: currentColor;
  d: path("M20 21V3h1v18zM3 21V3h1v18zm11.5-4.5v-9h2v9zm-7 0v-9h2v9z");
}
</style><path class="ay5js5b-p"/>`,
		"fallback": "material-symbols-light:align-justify-space-even-outline",
	});
}

export default Component;
