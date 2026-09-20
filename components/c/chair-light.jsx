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
		"content": `<style>.lx9okx21p {
  fill: currentColor;
  d: path("M208 138h-34v-36h18a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h18v36H48a14 14 0 0 0-14 14v16a14 14 0 0 0 14 14h10v42a6 6 0 0 0 12 0v-42h116v42a6 6 0 0 0 12 0v-42h10a14 14 0 0 0 14-14v-16a14 14 0 0 0-14-14M62 88V40a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v48a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2m32 14h68v36H94Zm116 66a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-16a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z");
}
</style><path class="lx9okx21p"/>`,
		"fallback": "ph:chair-light",
	});
}

export default Component;
