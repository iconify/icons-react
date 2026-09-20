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
		"content": `<style>.gj9iu8k8r {
  fill: currentColor;
  d: path("M5 2a.5.5 0 0 0 0 1h1v1h-.5A1.5 1.5 0 0 0 4 5.5V10h5V5.5A1.5 1.5 0 0 0 7.5 4H7V3h1a.5.5 0 0 0 0-1zm7 2a.5.5 0 0 0 0 1h1v1h-.5A1.5 1.5 0 0 0 11 7.5V9h5V7.5A1.5 1.5 0 0 0 14.5 6H14V5h1a.5.5 0 0 0 0-1zM4.5 15.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H7v-1h.5A1.5 1.5 0 0 0 9 12.5V11H4v1.5A1.5 1.5 0 0 0 5.5 14H6v1H5a.5.5 0 0 0-.5.5M12 18a.5.5 0 0 1 0-1h1v-1h-.5a1.5 1.5 0 0 1-1.5-1.5V10h5v4.5a1.5 1.5 0 0 1-1.5 1.5H14v1h1a.5.5 0 0 1 0 1z");
}
</style><path class="gj9iu8k8r"/>`,
		"fallback": "fluent:data-whisker-20-filled",
	});
}

export default Component;
