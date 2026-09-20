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
		"content": `<style>.zwyafxbdp {
  fill: currentColor;
  d: path("M3 5.25A2.25 2.25 0 0 1 5.25 3h1.865a.75.75 0 1 1 0 1.5H5.25a.75.75 0 0 0-.75.75v1.865a.75.75 0 1 1-1.5 0zm9.135-1.5a.75.75 0 0 1 .75-.75h1.865A2.25 2.25 0 0 1 17 5.25v1.865a.75.75 0 0 1-1.5 0V5.25a.75.75 0 0 0-.75-.75h-1.865a.75.75 0 0 1-.75-.75M3.75 12.135a.75.75 0 0 1 .75.75v1.865c0 .414.336.75.75.75h1.865a.75.75 0 0 1 0 1.5H5.25A2.25 2.25 0 0 1 3 14.75v-1.865a.75.75 0 0 1 .75-.75m12.5 0a.75.75 0 0 1 .75.75v1.865A2.25 2.25 0 0 1 14.75 17h-1.865a.75.75 0 0 1 0-1.5h1.865a.75.75 0 0 0 .75-.75v-1.865a.75.75 0 0 1 .75-.75");
}
</style><path class="zwyafxbdp"/>`,
		"fallback": "fluent:full-screen-maximize-20-filled",
	});
}

export default Component;
