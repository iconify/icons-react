import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ai2tr-b0t {
  fill: currentColor;
  d: path("M56 118h160a14 14 0 0 0 5.46-26.9h-.11L61.4 27.1A14 14 0 0 0 42 40v64a14 14 0 0 0 14 14m-2-78a2 2 0 0 1 2-2a2 2 0 0 1 .79.16l.11.05l159.92 64A2 2 0 0 1 216 106H56a2 2 0 0 1-2-2Zm162 98H56a14 14 0 0 0-14 14v64a14 14 0 0 0 19.39 12.92l160-64l.11-.05A14 14 0 0 0 216 138m.82 15.83l-159.92 64l-.11.05A2 2 0 0 1 54 216v-64a2 2 0 0 1 2-2h160a2 2 0 0 1 .82 3.83");
}
</style><path class="ai2tr-b0t"/>`,
		"fallback": "ph:flip-vertical-light",
	});
}

export default Component;
