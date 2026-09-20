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
		"content": `<style>.rquwa7rtk {
  fill: currentColor;
  d: path("M222 88a93.64 93.64 0 0 0-15.21-51.28a6 6 0 0 0-5-2.72H54.23a6 6 0 0 0-5 2.72A93.64 93.64 0 0 0 34 88a94.1 94.1 0 0 0 88 93.8V218H88a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12h-34v-36.2A94.1 94.1 0 0 0 222 88M57.56 46h140.88a81.6 81.6 0 0 1 11.34 36H46.22a81.6 81.6 0 0 1 11.34-36M128 170a82.09 82.09 0 0 1-81.76-76h163.52A82.09 82.09 0 0 1 128 170");
}
</style><path class="rquwa7rtk"/>`,
		"fallback": "ph:brandy-light",
	});
}

export default Component;
