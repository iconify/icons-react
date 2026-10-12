import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":320};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.djd-1wbqj {
  d: path("M4.008 63.991H191.99v63.992H68a4.013 4.013 0 0 0-4.008 4.008v55.993A4.013 4.013 0 0 0 68 191.99h123.992v63.992h-60a4.013 4.013 0 0 0-4.008 4.008v55.993a4.013 4.013 0 0 0 4.008 4.007h55.993a4.013 4.013 0 0 0 4.007-4.007v-60.001h60.001a4.013 4.013 0 0 0 4.008-4.008v-55.993a4.013 4.013 0 0 0-4.008-4.008h-60v-63.991h60a4.013 4.013 0 0 0 4.008-4.008V67.983a4.013 4.013 0 0 0-4.008-4.009h-60V4.008A4.013 4.013 0 0 0 187.983 0H4.008A4.013 4.013 0 0 0 0 4.008v55.993a4.013 4.013 0 0 0 4.008 4.008z");
}
</style><path class="djd-1wbqj"/>`,
		"fallback": "logos:baseten-icon",
	});
}

export default Component;
