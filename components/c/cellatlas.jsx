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
		"content": `<style>.pg5i-6b5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 34.475l9.329-20.953l9.329 20.956M43.5 13.525l-9.329 20.953l-9.329-20.956");
}
</style><path class="pg5i-6b5x"/>`,
		"fallback": "arcticons:cellatlas",
	});
}

export default Component;
