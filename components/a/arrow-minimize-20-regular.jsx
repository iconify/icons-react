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
		"content": `<style>.p77at4hxs {
  fill: currentColor;
  d: path("M8.5 11a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-3.793l-5.146 5.147a.5.5 0 0 1-.708-.707L7.293 12H3.5a.5.5 0 0 1 0-1zm8.647-8.854a.5.5 0 1 1 .707.708L12.707 8H16.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v3.793z");
}
</style><path class="p77at4hxs"/>`,
		"fallback": "fluent:arrow-minimize-20-regular",
	});
}

export default Component;
