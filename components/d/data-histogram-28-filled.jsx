import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bct-19lvs {
  fill: currentColor;
  d: path("M9 25H3.75a.75.75 0 0 1-.75-.75v-9.5A2.75 2.75 0 0 1 5.75 12H9zm5.75-22a2.75 2.75 0 0 1 2.75 2.75V25h-7V5.75A2.75 2.75 0 0 1 13.25 3zm7.5 5A2.75 2.75 0 0 1 25 10.75v13.5a.75.75 0 0 1-.75.75H19V8z");
}
</style><path class="bct-19lvs"/>`,
		"fallback": "fluent:data-histogram-28-filled",
	});
}

export default Component;
