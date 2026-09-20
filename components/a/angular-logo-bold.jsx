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
		"content": `<style>.szpg87bgy {
  fill: currentColor;
  d: path("m228.61 60.92l-96-40a12 12 0 0 0-9.24 0l-96 40a12 12 0 0 0-7.28 12.67l16 120a12 12 0 0 0 6.52 9.14l80 40a12 12 0 0 0 10.74 0l80-40a12 12 0 0 0 6.52-9.14l16-120a12 12 0 0 0-7.26-12.67M197 184.11l-69 34.47l-68.95-34.47L45.11 79.54L128 45l82.89 34.54ZM117.51 82.17l-40 72a12 12 0 1 0 21 11.66l7.66-13.83h43.66l7.68 13.83a12 12 0 1 0 21-11.66l-40-72a12 12 0 0 0-21 0m2 45.83l8.49-15.29l8.49 15.29Z");
}
</style><path class="szpg87bgy"/>`,
		"fallback": "ph:angular-logo-bold",
	});
}

export default Component;
