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
		"content": `<style>.bzu4u48zf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 36.316h-37M36.456 42.5v-37L14.769 19.256V42.5");
}
</style><path class="bzu4u48zf"/>`,
		"fallback": "arcticons:animeone",
	});
}

export default Component;
