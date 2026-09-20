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
		"content": `<style>.z2oo4zbet {
  fill: currentColor;
  d: path("M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75V8H2zM9.207 16H4.75A2.75 2.75 0 0 1 2 13.25V9h12.5a5.5 5.5 0 0 0-5.293 7M19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5");
}
</style><path class="z2oo4zbet"/>`,
		"fallback": "fluent:credit-card-clock-20-filled",
	});
}

export default Component;
