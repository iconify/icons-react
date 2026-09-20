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
		"content": `<style>.ifc2dxbuw {
  fill: currentColor;
  d: path("M92 136a8 8 0 1 1 8-8a8 8 0 0 1-8 8m72-16a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-10.13 44.62a49 49 0 0 1-51.74 0a4 4 0 0 0-4.26 6.76a57 57 0 0 0 60.26 0a4 4 0 1 0-4.26-6.76M228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92.11 92.11 0 0 0-90.06-92C116.26 54.07 116 71.83 116 72a12 12 0 0 0 24 0a4 4 0 0 1 8 0a20 20 0 0 1-40 0c0-.78.16-17.31 12-35.64A92 92 0 1 0 220 128");
}
</style><path class="ifc2dxbuw"/>`,
		"fallback": "ph:baby-thin",
	});
}

export default Component;
