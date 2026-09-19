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
		"content": `<style>.n33v6cbrk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6 39.696L23.913 8.304L42 39.696l-14.609-4.087l-.174-5.13l4.957 1.651l-8.261-14.608l-8 14.26l4.783-1.304l-.087 5.13z");
}
</style><path class="n33v6cbrk"/>`,
		"fallback": "arcticons:infinity-army",
	});
}

export default Component;
