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
		"content": `<style>.s7b3md01r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M12 8.25q3.75 0 3.75 3.75T12 15.75T8.25 12T12 8.25m0 6q-2.25 0-2.25-2.25T12 9.75T14.25 12T12 14.25");
}
</style><path class="s7b3md01r"/>`,
		"fallback": "uix-solid:circle-dot",
	});
}

export default Component;
