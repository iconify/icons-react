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
		"content": `<style>.xfvxzqbym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5C13.783 5.5 5.5 13.783 5.5 24a18.5 18.5 0 0 0 7.447 14.775L5.5 42.5H24c10.217 0 18.5-8.283 18.5-18.5S34.217 5.5 24 5.5");
}
</style><path class="xfvxzqbym"/>`,
		"fallback": "arcticons:cbb-mobil",
	});
}

export default Component;
