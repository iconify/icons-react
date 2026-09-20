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
		"content": `<style>.xayn0ez1e {
  fill: currentColor;
  d: path("M200 34h-37.17a45.91 45.91 0 0 0-69.66 0H56a14 14 0 0 0-14 14v168a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m-72-4a34 34 0 0 1 34 34v2H94v-2a34 34 0 0 1 34-34m74 186a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h29.67A45.8 45.8 0 0 0 82 64v8a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6v-8a45.8 45.8 0 0 0-3.67-18H200a2 2 0 0 1 2 2Z");
}
</style><path class="xayn0ez1e"/>`,
		"fallback": "ph:clipboard-light",
	});
}

export default Component;
