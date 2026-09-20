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
		"content": `<style>.l4-gxofhv {
  fill: currentColor;
  d: path("M172 164a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12-52H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m60-64v168a20 20 0 0 1-20 20H56a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h34.53a51.88 51.88 0 0 1 74.94 0H200a20 20 0 0 1 20 20M100.29 60h55.42a28 28 0 0 0-55.42 0M196 52h-17.41A52 52 0 0 1 180 64v8a12 12 0 0 1-12 12H88a12 12 0 0 1-12-12v-8a52 52 0 0 1 1.41-12H60v160h136Z");
}
</style><path class="l4-gxofhv"/>`,
		"fallback": "ph:clipboard-text-bold",
	});
}

export default Component;
