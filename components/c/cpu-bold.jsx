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
		"content": `<style>.cobqkwb9t {
  fill: currentColor;
  d: path("M156 88h-56a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12h56a12 12 0 0 0 12-12v-56a12 12 0 0 0-12-12m-12 56h-32v-32h32Zm88-4h-12v-24h12a12 12 0 0 0 0-24h-12V56a20 20 0 0 0-20-20h-36V24a12 12 0 0 0-24 0v12h-24V24a12 12 0 0 0-24 0v12H56a20 20 0 0 0-20 20v36H24a12 12 0 0 0 0 24h12v24H24a12 12 0 0 0 0 24h12v36a20 20 0 0 0 20 20h36v12a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0v-12h36a20 20 0 0 0 20-20v-36h12a12 12 0 0 0 0-24m-36 56H60V60h136Z");
}
</style><path class="cobqkwb9t"/>`,
		"fallback": "ph:cpu-bold",
	});
}

export default Component;
