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
		"content": `<style>.qxwmkttaq {
  fill: currentColor;
  d: path("M120 206H72a6 6 0 0 1 0-12h48a6 6 0 0 1 0 12m64-12h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m-24 32h-56a6 6 0 0 0 0 12h56a6 6 0 0 0 0-12m70-126a74.09 74.09 0 0 1-74 74H76a50 50 0 1 1 10.2-99A74.08 74.08 0 0 1 230 100m-12 0a62.06 62.06 0 0 0-124-3.65a6 6 0 0 1-12-.7a76 76 0 0 1 1.07-9A38 38 0 1 0 76 162h80a62.07 62.07 0 0 0 62-62");
}
</style><path class="qxwmkttaq"/>`,
		"fallback": "ph:cloud-fog-light",
	});
}

export default Component;
