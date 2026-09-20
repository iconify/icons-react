import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r7twh3b7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.07 29.56A19.61 19.61 0 0 1 5.75 9m36.62.4zA19.54 19.54 0 0 1 38 29.56m-14-19c1.36 0 2.46 2 2.46 4.43s-1.1 4.42-2.46 4.42s-2.46-2-2.46-4.42s1.1-4.4 2.46-4.4Zm.08 12.52v15.94M15.62 9.45c-1.14 1.23-1.86 4.46-1.86 6.05c0 6.83 4.4 11.74 10.32 11.74m8.47-17.79c1.14 1.23 1.86 4.46 1.86 6.05c0 6.83-4.4 11.74-10.33 11.74");
}
</style><path class="r7twh3b7m"/>`,
		"fallback": "arcticons:eduroamcat",
	});
}

export default Component;
