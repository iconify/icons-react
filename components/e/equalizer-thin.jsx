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
		"content": `<style>.bhlh2ccpv {
  fill: currentColor;
  d: path("M76 96a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-4 28H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m80-64h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m80-96h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m-48-24h48a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8m48 56h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8");
}
</style><path class="bhlh2ccpv"/>`,
		"fallback": "ph:equalizer-thin",
	});
}

export default Component;
