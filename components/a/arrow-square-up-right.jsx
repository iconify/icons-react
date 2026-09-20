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
		"content": `<style>.t_7dx4lmt {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160ZM90.34 165.66a8 8 0 0 1 0-11.32L140.69 104H112a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8v48a8 8 0 0 1-16 0v-28.69l-50.34 50.35a8 8 0 0 1-11.32 0");
}
</style><path class="t_7dx4lmt"/>`,
		"fallback": "ph:arrow-square-up-right",
	});
}

export default Component;
