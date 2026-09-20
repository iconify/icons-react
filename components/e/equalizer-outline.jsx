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
		"content": `<style>.ksjlc9wto {
  fill: currentColor;
  d: path("M4 20v-8h4v8zm6 0V4h4v16zm6 0V9h4v11z");
}
</style><path class="ksjlc9wto"/>`,
		"fallback": "material-symbols:equalizer-outline",
	});
}

export default Component;
