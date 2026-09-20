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
		"content": `<style>.r1mzglbdj {
  fill: currentColor;
  d: path("M228 136.33A100.13 100.13 0 1 1 119.67 28a4 4 0 1 1 .66 8A92.13 92.13 0 1 0 220 135.67a4 4 0 1 1 8 .66M128 132h56a4 4 0 0 0 0-8h-52V72a4 4 0 0 0-8 0v56a4 4 0 0 0 4 4m32-88a8 8 0 1 0-8-8a8 8 0 0 0 8 8m36 24a8 8 0 1 0-8-8a8 8 0 0 0 8 8m24 36a8 8 0 1 0-8-8a8 8 0 0 0 8 8");
}
</style><path class="r1mzglbdj"/>`,
		"fallback": "ph:clock-countdown-thin",
	});
}

export default Component;
