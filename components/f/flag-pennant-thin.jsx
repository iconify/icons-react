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
		"content": `<style>.fbshizb6u {
  fill: currentColor;
  d: path("m241.31 100.22l-184-64A4 4 0 0 0 52 40v176a4 4 0 0 0 8 0v-45.16l181.31-63.06a4 4 0 0 0 0-7.56M60 162.37V45.63L227.82 104Z");
}
</style><path class="fbshizb6u"/>`,
		"fallback": "ph:flag-pennant-thin",
	});
}

export default Component;
