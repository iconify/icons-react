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
		"content": `<style>.n1trt_b3v {
  fill: currentColor;
  d: path("M2 21v-9h2v7h9v2zm4-4V8h2v7h9v2zm4-4V3h12v10zm2-2h8V7h-8z");
}
</style><path class="n1trt_b3v"/>`,
		"fallback": "material-symbols:dynamic-feed-outline-sharp",
	});
}

export default Component;
