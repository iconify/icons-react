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
		"content": `<style>.mh-npablx {
  fill: currentColor;
  d: path("M7 4.5c0 .356-.074.694-.208 1H10a.5.5 0 0 1 .5.5v2H10a2 2 0 0 0-2 2v.5H6a.5.5 0 0 1-.5-.5V6.792A2.5 2.5 0 0 1 4 6.95V10a2 2 0 0 0 2 2h2v2a2 2 0 0 0 2 2h3.05a2.5 2.5 0 0 1 .158-1.5H10a.5.5 0 0 1-.5-.5v-2h.5a2 2 0 0 0 2-2v-.5h2a.5.5 0 0 1 .5.5v3.208a2.5 2.5 0 0 1 1.5-.158V10a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2H6.95q.05.243.05.5m3.5 5v.5a.5.5 0 0 1-.5.5h-.5V10a.5.5 0 0 1 .5-.5zM6 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="mh-npablx"/>`,
		"fallback": "fluent:group-20-filled",
	});
}

export default Component;
