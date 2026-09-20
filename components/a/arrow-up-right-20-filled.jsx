import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k8thgdbil {
  fill: currentColor;
  d: path("M8 3.75A.75.75 0 0 1 8.75 3h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 1 1-1.5 0V5.56L4.28 16.78a.75.75 0 0 1-1.06-1.06L14.44 4.5H8.75A.75.75 0 0 1 8 3.75");
}
</style><path class="k8thgdbil"/>`,
		"fallback": "fluent:arrow-up-right-20-filled",
	});
}

export default Component;
