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
		"content": `<style>.rb6fskh1p {
  fill: currentColor;
  d: path("M200 68h-36V32a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v36H56a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h36v84a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-84h36a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20m-4 48h-44a12 12 0 0 0-12 12v92h-24v-92a12 12 0 0 0-12-12H60V92h44a12 12 0 0 0 12-12V36h24v44a12 12 0 0 0 12 12h44Z");
}
</style><path class="rb6fskh1p"/>`,
		"fallback": "ph:cross-bold",
	});
}

export default Component;
