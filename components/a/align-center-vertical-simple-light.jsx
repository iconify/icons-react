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
		"content": `<style>.gp4hgsdzh {
  fill: currentColor;
  d: path("M208 122h-34V48a14 14 0 0 0-14-14H96a14 14 0 0 0-14 14v74H48a6 6 0 0 0 0 12h34v74a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-74h34a6 6 0 0 0 0-12m-46 86a2 2 0 0 1-2 2H96a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2Z");
}
</style><path class="gp4hgsdzh"/>`,
		"fallback": "ph:align-center-vertical-simple-light",
	});
}

export default Component;
