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
		"content": `<style>.fckj4bb3w {
  fill: currentColor;
  d: path("M222 163.37V144a94.17 94.17 0 0 0-73.7-91.79a26 26 0 1 0-40.6 0A94.17 94.17 0 0 0 34 144v19.37A14 14 0 0 0 26 176v32a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14v-32a14 14 0 0 0-8-12.63M114 36a14 14 0 1 1 14 14a14 14 0 0 1-14-14m14 26a82.1 82.1 0 0 1 82 82v18H46v-18a82.1 82.1 0 0 1 82-82m-6 112v36H78v-36Zm12 0h44v36h-44Zm-96 34v-32a2 2 0 0 1 2-2h26v36H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2h-26v-36h26a2 2 0 0 1 2 2Z");
}
</style><path class="fckj4bb3w"/>`,
		"fallback": "ph:beanie-light",
	});
}

export default Component;
