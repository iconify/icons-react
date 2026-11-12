import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zmy7llbpf {
  fill: currentColor;
  d: path("M5 9c-.449 0-1 .551-1 1v4c0 .449.551 1 1 1h2v-2H6a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5c-1.556 0-3-1.444-3-3v-4c0-1.556 1.444-3 3-3h3a1 1 0 0 1 0 2Zm6 7V8a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0m6-7v2h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2Z");
}
</style><path class="zmy7llbpf"/>`,
		"fallback": "coolicons:gif-fill-round",
	});
}

export default Component;
