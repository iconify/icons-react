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
		"content": `<style>.z1_01lx6x {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160ZM88 160v-48a8 8 0 0 1 16 0v28.69l50.34-50.35a8 8 0 0 1 11.32 11.32L115.31 152H144a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8");
}
</style><path class="z1_01lx6x"/>`,
		"fallback": "ph:arrow-square-down-left",
	});
}

export default Component;
