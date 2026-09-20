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
		"content": `<style>.m7_iq-bro {
  fill: currentColor;
  d: path("M8.564 3.003A2 2 0 0 0 8.5 3.5a2 2 0 0 0 .066.503L5 4a1 1 0 0 0-1 1v4.5h11a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM4 15a1 1 0 0 0 1 1h4.5v-5.5H4zm6.5 1H15a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1h-4.5zm0-9.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m7 .5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm-7-4.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m7 .5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z");
}
</style><path class="m7_iq-bro"/>`,
		"fallback": "fluent:apps-bullet-list-20-regular",
	});
}

export default Component;
