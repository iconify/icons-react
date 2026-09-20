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
		"content": `<style>.nx4172vrq {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.848a2.994 2.994 0 0 0 4.9.148a.5.5 0 1 0-.798-.6A2 2 0 0 1 6.27 9H7a.5.5 0 0 0 0-1zm6-3a.5.5 0 0 0-.5.5v.845a2.997 2.997 0 0 0-4.9-.146a.5.5 0 0 0 .8.602A1.997 1.997 0 0 1 9.732 7H9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 11 5");
}
</style><path class="nx4172vrq"/>`,
		"fallback": "fluent:arrow-sync-circle-16-filled",
	});
}

export default Component;
