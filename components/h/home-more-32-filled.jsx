import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b3ebq-0cj {
  fill: currentColor;
  d: path("M18.105 2.778a3.25 3.25 0 0 0-4.21 0l-9.75 8.287A3.25 3.25 0 0 0 3 13.541v12.215A3.245 3.245 0 0 0 6.245 29h19.51A3.245 3.245 0 0 0 29 25.756V13.54a3.25 3.25 0 0 0-1.145-2.476zM12 16.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M10.5 23a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0-5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3");
}
</style><path class="b3ebq-0cj"/>`,
		"fallback": "fluent:home-more-32-filled",
	});
}

export default Component;
