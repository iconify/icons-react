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
		"content": `<style>.n3izh9rmm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24c0 10.217-8.283 18.5-18.5 18.5S5.5 34.217 5.5 24S13.783 5.5 24 5.5h18.5z");
}
</style><path class="n3izh9rmm"/>`,
		"fallback": "arcticons:fortuno",
	});
}

export default Component;
