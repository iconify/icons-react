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
		"content": `<style>.w7c00lb8l {
  fill: currentColor;
  d: path("M248 212h-12v-84a12 12 0 0 0-12-12h-60V48a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v164H32a4 4 0 0 0 0 8h216a4 4 0 0 0 0-8m-24-88a4 4 0 0 1 4 4v84h-64v-88ZM52 48a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4v164h-24v-52a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v52H52Zm72 164H84v-48h40ZM76 96a4 4 0 0 1 4-4h20V72a4 4 0 0 1 8 0v20h20a4 4 0 0 1 0 8h-20v20a4 4 0 0 1-8 0v-20H80a4 4 0 0 1-4-4");
}
</style><path class="w7c00lb8l"/>`,
		"fallback": "ph:hospital-thin",
	});
}

export default Component;
