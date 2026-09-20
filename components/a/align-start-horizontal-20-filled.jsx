import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r0_fgi5qi {
  fill: currentColor;
  d: path("M3 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0zM8 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z");
}
</style><path class="r0_fgi5qi"/>`,
		"fallback": "fluent:align-start-horizontal-20-filled",
	});
}

export default Component;
