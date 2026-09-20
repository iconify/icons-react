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
		"content": `<style>.qj8bu--yl {
  fill: currentColor;
  d: path("M11.003 2.381a1.5 1.5 0 0 0-2.006 0l-5.5 4.95A1.5 1.5 0 0 0 3 8.446V15.5A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5V8.446a1.5 1.5 0 0 0-.497-1.115zm-.503 11.12v1a.5.5 0 0 1-1 0v-1a.5.5 0 1 1 1 0M10 9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 10 9m.5-3.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0");
}
</style><path class="qj8bu--yl"/>`,
		"fallback": "fluent:home-split-20-filled",
	});
}

export default Component;
