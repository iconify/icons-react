import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hwd54123q {
  fill: currentColor;
  d: path("M13.854 2.854a.5.5 0 0 0-.708-.708L10 5.293V3.5a.5.5 0 0 0-1 0v2.9a.6.6 0 0 0 .6.6h2.9a.5.5 0 0 0 0-1h-1.793zM6.5 13a.5.5 0 0 1-.5-.5v-1.793l-3.146 3.147a.5.5 0 0 1-.708-.708L5.293 10H3.5a.5.5 0 0 1 0-1h2.9a.6.6 0 0 1 .6.6v2.9a.5.5 0 0 1-.5.5");
}
</style><path class="hwd54123q"/>`,
		"fallback": "fluent:arrow-minimize-16-regular",
	});
}

export default Component;
