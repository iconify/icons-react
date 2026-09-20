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
		"content": `<style>.fxytrd97z {
  d: path("M216.008 56H180v-8a28.031 28.031 0 0 0-28-28h-48a28.031 28.031 0 0 0-28 28v8H40.008a20.022 20.022 0 0 0-20 20v128a20.022 20.022 0 0 0 20 20h176a20.022 20.022 0 0 0 20-20V76a20.022 20.022 0 0 0-20-20zM100 48a4.004 4.004 0 0 1 4-4h48a4.004 4.004 0 0 1 4 4v8h-56zm112.008 152h-168V80h168z");
  fill: currentColor;
}
</style><path class="fxytrd97z"/>`,
		"fallback": "ph:briefcase-simple-bold",
	});
}

export default Component;
