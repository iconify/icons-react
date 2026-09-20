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
		"content": `<style>.f4e1xnx8n {
  fill: currentColor;
  d: path("M80 28H56a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H60V52h16Zm80-176h-24a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-16V52h16Zm100-76a12 12 0 0 1-12 12h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1 0-24h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 12 12");
}
</style><path class="f4e1xnx8n"/>`,
		"fallback": "ph:columns-plus-right-bold",
	});
}

export default Component;
