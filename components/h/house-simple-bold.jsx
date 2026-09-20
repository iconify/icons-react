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
		"content": `<style>.n5ax036am {
  fill: currentColor;
  d: path("m222.14 105.85l-80-80a20 20 0 0 0-28.28 0l-80 80A19.86 19.86 0 0 0 28 120v96a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12v-96a19.86 19.86 0 0 0-5.86-14.15M204 204H52v-82.35l76-76l76 76Z");
}
</style><path class="n5ax036am"/>`,
		"fallback": "ph:house-simple-bold",
	});
}

export default Component;
