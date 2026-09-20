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
		"content": `<style>.lsku24bld {
  fill: currentColor;
  d: path("m236.24 123.76l-96-96A6 6 0 0 0 130 32v42H48a14 14 0 0 0-14 14v80a14 14 0 0 0 14 14h82v42a6 6 0 0 0 10.24 4.24l96-96a6 6 0 0 0 0-8.48M142 209.51V176a6 6 0 0 0-6-6H48a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h88a6 6 0 0 0 6-6V46.49L223.51 128Z");
}
</style><path class="lsku24bld"/>`,
		"fallback": "ph:arrow-fat-right-light",
	});
}

export default Component;
