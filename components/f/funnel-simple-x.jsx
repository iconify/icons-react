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
		"content": `<style>.eofn0_k4h {
  fill: currentColor;
  d: path("M192 144H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m40-64H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-104 96h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m93.66-5.66a8 8 0 0 0-11.32 0L192 188.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L180.69 200l-18.35 18.34a8 8 0 0 0 11.32 11.32L192 211.31l18.34 18.35a8 8 0 0 0 11.32-11.32L203.31 200l18.35-18.34a8 8 0 0 0 0-11.32");
}
</style><path class="eofn0_k4h"/>`,
		"fallback": "ph:funnel-simple-x",
	});
}

export default Component;
