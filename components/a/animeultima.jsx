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
		"content": `<style>.qyjyr65jz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.938 43.5l14.343-39h7.438l14.344 39h-8.5l-2.657-7.905H17.094L14.438 43.5Z");
}

.ubgz96bes {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.375 18.167v10.04l7.25-5.02Z");
}
</style><path class="ubgz96bes"/><path class="qyjyr65jz"/>`,
		"fallback": "arcticons:animeultima",
	});
}

export default Component;
