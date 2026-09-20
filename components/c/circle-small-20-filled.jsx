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
		"content": `<style>.yr1cwre4p {
  fill: currentColor;
  d: path("M13 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0");
}
</style><path class="yr1cwre4p"/>`,
		"fallback": "fluent:circle-small-20-filled",
	});
}

export default Component;
