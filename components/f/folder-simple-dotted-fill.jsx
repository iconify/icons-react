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
		"content": `<style>.gx0xfo4yh {
  fill: currentColor;
  d: path("M24 152v-32a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0Zm8-64a8 8 0 0 0 8-8V64h53.3l29.9 22.4A7.7 7.7 0 0 0 128 88a8 8 0 0 0 4.8-14.4l-29.9-22.4a15.6 15.6 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v16a8 8 0 0 0 8 8Zm56 112H40v-8a8 8 0 0 0-16 0v8.6A15.4 15.4 0 0 0 39.4 216H88a8 8 0 0 0 0-16ZM216 72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16Zm-56 128h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.9a15.2 15.2 0 0 0 15.1-15.1V152a8 8 0 0 0-8-8Z");
}
</style><path class="gx0xfo4yh"/>`,
		"fallback": "ph:folder-simple-dotted-fill",
	});
}

export default Component;
