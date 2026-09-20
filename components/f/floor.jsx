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
		"content": `<style>.i90wcrbxx {
  fill: currentColor;
  d: path("M3 22v-2h3.5v-4.5H11V11h4.5V6.5H20V3h2v5.5h-4.5V13H13v4.5H8.5V22z");
}
</style><path class="i90wcrbxx"/>`,
		"fallback": "material-symbols:floor",
	});
}

export default Component;
