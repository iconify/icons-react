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
		"content": `<style>.lnkv9pb0r {
  fill: currentColor;
  d: path("M3.5 3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V4.707l3.146 3.147a.5.5 0 1 0 .708-.708L4.707 4H7.5a.5.5 0 0 0 0-1zm0 14a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793l3.146-3.147a.5.5 0 0 1 .708.708L4.707 16H7.5a.5.5 0 0 1 0 1zM17 3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h2.793l-3.147 3.146a.5.5 0 0 0 .708.708L16 4.707V7.5a.5.5 0 0 0 1 0zM16.5 17a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.793l-3.146-3.147a.5.5 0 0 0-.708.708L15.293 16H12.5a.5.5 0 0 0 0 1z");
}
</style><path class="lnkv9pb0r"/>`,
		"fallback": "fluent:arrow-expand-20-regular",
	});
}

export default Component;
