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
		"content": `<style>.b2s5job3u {
  fill: currentColor;
  d: path("M4.5 6a.5.5 0 0 1 .5.5V8a2 2 0 1 1-2-2zM8 6a2 2 0 1 1-2 2V6.5a.5.5 0 0 1 .5-.5zM3 1a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5H3a2 2 0 1 1 0-4m5 0a2 2 0 1 1 0 4H6.5a.5.5 0 0 1-.5-.5V3a2 2 0 0 1 2-2");
}
</style><path class="b2s5job3u"/>`,
		"fallback": "fluent:clover-12-filled",
	});
}

export default Component;
