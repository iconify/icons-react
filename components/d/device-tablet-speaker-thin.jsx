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
		"content": `<style>.m6k-8ebtj {
  fill: currentColor;
  d: path("M192 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m12 180a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM164 64a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4");
}
</style><path class="m6k-8ebtj"/>`,
		"fallback": "ph:device-tablet-speaker-thin",
	});
}

export default Component;
