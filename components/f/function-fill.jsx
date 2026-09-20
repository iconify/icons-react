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
		"content": `<style>.p4j_e1iil {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 40h-16.08a16 16 0 0 0-15.73 13l-6.55 35H168a8 8 0 0 1 0 16h-33.36l-7.11 37.9A32 32 0 0 1 96.08 200H80a8 8 0 0 1 0-16h16.08a16 16 0 0 0 15.73-13l6.55-35H88a8 8 0 0 1 0-16h33.36l7.11-37.9A32 32 0 0 1 159.92 56H176a8 8 0 0 1 0 16");
}
</style><path class="p4j_e1iil"/>`,
		"fallback": "ph:function-fill",
	});
}

export default Component;
