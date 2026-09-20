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
		"content": `<style>.n95ut1isq {
  fill: currentColor;
  d: path("M10 2.25a.75.75 0 0 1 .75.75v6.25H17a.75.75 0 0 1 0 1.5h-6.25V17a.75.75 0 0 1-1.5 0v-6.25H3a.75.75 0 0 1 0-1.5h6.25V3a.75.75 0 0 1 .75-.75");
}
</style><path class="n95ut1isq"/>`,
		"fallback": "fluent:add-20-filled",
	});
}

export default Component;
