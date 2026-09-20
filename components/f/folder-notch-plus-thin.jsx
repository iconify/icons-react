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
		"content": `<style>.fwn1a9blk {
  fill: currentColor;
  d: path("M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12M36 64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l25.6 19.2l-25.6 19.2a4 4 0 0 1-2.4.8H36Zm184 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-92h57.33a12.05 12.05 0 0 0 7.2-2.4l28.8-21.6H216a4 4 0 0 1 4 4Zm-64-48a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4");
}
</style><path class="fwn1a9blk"/>`,
		"fallback": "ph:folder-notch-plus-thin",
	});
}

export default Component;
