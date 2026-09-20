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
		"content": `<style>.qm5benbfu {
  fill: currentColor;
  d: path("M10 10a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5m0-8a8 8 0 0 1 8 8v6a2 2 0 0 1-2 2h-.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5H17v-1a7 7 0 1 0-14 0v1h1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-6a8 8 0 0 1 8-8M3 16a1 1 0 0 0 1 1v-5H3zm4.5-4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m3.5 5a1 1 0 0 0 1-1v-4h-1z");
}
</style><path class="qm5benbfu"/>`,
		"fallback": "fluent:headphones-sound-wave-20-regular",
	});
}

export default Component;
