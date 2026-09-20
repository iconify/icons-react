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
		"content": `<style>.uzyhyfh2x {
  fill: currentColor;
  d: path("M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z");
}
</style><path class="uzyhyfh2x"/>`,
		"fallback": "material-symbols:arrow-forward-sharp",
	});
}

export default Component;
