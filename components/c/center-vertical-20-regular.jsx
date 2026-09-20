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
		"content": `<style>.l3z2byj7u {
  fill: currentColor;
  d: path("M2 3.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5M2.5 16a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zM6 7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z");
}
</style><path class="l3z2byj7u"/>`,
		"fallback": "fluent:center-vertical-20-regular",
	});
}

export default Component;
