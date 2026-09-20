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
		"content": `<style>.xzop-zbjd {
  fill: currentColor;
  d: path("M10 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15A.5.5 0 0 1 10 2m3.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5M7 5.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0zM16.5 8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M4 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0z");
}
</style><path class="xzop-zbjd"/>`,
		"fallback": "fluent:device-eq-20-regular",
	});
}

export default Component;
