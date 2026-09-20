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
		"content": `<style>.ah256ka1r {
  fill: currentColor;
  d: path("m222.14 69.17l-35.31-35.31A19.86 19.86 0 0 0 172.69 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V83.31a19.86 19.86 0 0 0-5.86-14.14M164 204H92v-44h72Zm40 0h-16v-48a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v48H52V52h119l33 33ZM164 84a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h56a12 12 0 0 1 12 12");
}
</style><path class="ah256ka1r"/>`,
		"fallback": "ph:floppy-disk-bold",
	});
}

export default Component;
