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
		"content": `<style>.xlg69-iui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.015 33.62l9.61-28.12l8.88 22.2zm-6.67 0h33.31l-4.44 8.88h-24.43z");
}
</style><path class="xlg69-iui"/>`,
		"fallback": "arcticons:boat-crest",
	});
}

export default Component;
