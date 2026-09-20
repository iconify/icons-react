import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e2tlrf2zw {
  fill: currentColor;
  d: path("M4.5 6a.5.5 0 0 1 .5.5V8a2 2 0 1 1-2-2zM8 6a2 2 0 1 1-2 2V6.5a.5.5 0 0 1 .5-.5zM3 7a1 1 0 1 0 1 1V7zm4 1a1 1 0 1 0 1-1H7zM3 1a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5H3a2 2 0 1 1 0-4m5 0a2 2 0 1 1 0 4H6.5a.5.5 0 0 1-.5-.5V3a2 2 0 0 1 2-2M3 2a1 1 0 0 0 0 2h1V3a1 1 0 0 0-1-1m5 0a1 1 0 0 0-1 1v1h1a1 1 0 0 0 0-2");
}
</style><path class="e2tlrf2zw"/>`,
		"fallback": "fluent:clover-12-regular",
	});
}

export default Component;
