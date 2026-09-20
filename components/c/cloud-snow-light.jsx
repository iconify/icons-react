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
		"content": `<style>.um_ovebie {
  fill: currentColor;
  d: path("M86 196a10 10 0 1 1-10-10a10 10 0 0 1 10 10m30 6a10 10 0 1 0 10 10a10 10 0 0 0-10-10m48-16a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-96 40a10 10 0 1 0 10 10a10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m74-134a74.09 74.09 0 0 1-74 74H76a50 50 0 1 1 10.2-99A74.08 74.08 0 0 1 230 92m-12 0a62.06 62.06 0 0 0-124-3.65a6 6 0 0 1-12-.7a76 76 0 0 1 1.07-9A38 38 0 1 0 76 154h80a62.07 62.07 0 0 0 62-62");
}
</style><path class="um_ovebie"/>`,
		"fallback": "ph:cloud-snow-light",
	});
}

export default Component;
