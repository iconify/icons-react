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
		"content": `<style>.x2-2cfxjk {
  fill: currentColor;
  d: path("M7.75 2a5.75 5.75 0 1 0 0 11.5h5a.75.75 0 0 0 .75-.75v-5A5.75 5.75 0 0 0 7.75 2m0 24a5.75 5.75 0 0 1 0-11.5h5a.75.75 0 0 1 .75.75v5A5.75 5.75 0 0 1 7.75 26m12.5-24a5.75 5.75 0 0 1 0 11.5h-5a.75.75 0 0 1-.75-.75v-5A5.75 5.75 0 0 1 20.25 2m0 24a5.75 5.75 0 0 0 0-11.5h-5a.75.75 0 0 0-.75.75v5A5.75 5.75 0 0 0 20.25 26");
}
</style><path class="x2-2cfxjk"/>`,
		"fallback": "fluent:clover-28-filled",
	});
}

export default Component;
