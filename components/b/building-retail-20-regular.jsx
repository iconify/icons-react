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
		"content": `<style>.uvd6llbxq {
  fill: currentColor;
  d: path("M5.5 7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm.5 3V8h8v2zm5.5 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm.5 2v-1h2v1zM2 4.5A1.5 1.5 0 0 1 3.5 3h13a1.5 1.5 0 0 1 .5 2.915V16.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V5.915A1.5 1.5 0 0 1 2 4.5M3.5 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM4 6v10h1v-3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V16h6V6zm2 10h3v-3H6z");
}
</style><path class="uvd6llbxq"/>`,
		"fallback": "fluent:building-retail-20-regular",
	});
}

export default Component;
