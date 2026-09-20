import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sfy76uwxa {
  fill: currentColor;
  d: path("M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1M2 6a4 4 0 1 1 8 0zm.126 1h7.748a4.002 4.002 0 0 1-7.748 0");
}
</style><path class="sfy76uwxa"/>`,
		"fallback": "fluent:circle-line-12-regular",
	});
}

export default Component;
