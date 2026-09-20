import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ahm4shblx {
  fill: currentColor;
  d: path("M234.29 47.91A20 20 0 0 0 216 36H40a20 20 0 0 0-14.8 33.45l.12.14L92 140.75V216a20 20 0 0 0 31.1 16.64l32-21.33a20 20 0 0 0 8.9-16.65v-53.91l66.67-71.16l.12-.14a20 20 0 0 0 3.5-21.54m-91 79.89A12 12 0 0 0 140 136v56.52l-24 16V136a12 12 0 0 0-3.25-8.2L49.23 60h157.54Z");
}
</style><path class="ahm4shblx"/>`,
		"fallback": "ph:funnel-bold",
	});
}

export default Component;
