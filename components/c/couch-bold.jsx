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
		"content": `<style>.vfh3i6wms {
  fill: currentColor;
  d: path("M244 104V72a20 20 0 0 0-20-20H32a20 20 0 0 0-20 20v32a20 20 0 0 0-8 16v48a20 20 0 0 0 20 20h4v12a12 12 0 0 0 24 0v-12h152v12a12 12 0 0 0 24 0v-12h4a20 20 0 0 0 20-20v-48a20 20 0 0 0-8-16m-24-4h-12a20 20 0 0 0-20 20v4h-48V76h80ZM116 76v48H68v-4a20 20 0 0 0-20-20H36V76Zm112 88H28v-40h16v12a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-12h16Z");
}
</style><path class="vfh3i6wms"/>`,
		"fallback": "ph:couch-bold",
	});
}

export default Component;
