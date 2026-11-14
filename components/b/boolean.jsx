import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hcnzgcc6a {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.5 5.75h-9q-2.589 0-4.419 1.831Q1.25 9.411 1.25 12t1.831 4.419T7.5 18.25h9q2.589 0 4.419-1.831Q22.75 14.589 22.75 12t-1.831-4.419Q19.089 5.75 16.5 5.75");
}
</style><path class="hcnzgcc6a"/>`,
		"fallback": "uix-solid:boolean",
	});
}

export default Component;
