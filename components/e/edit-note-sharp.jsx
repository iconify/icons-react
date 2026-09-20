import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jft38cmjx {
  fill: currentColor;
  d: path("M5 14v-1h7v1zm0-4V9h11v1zm0-4V5h11v1zm8.23 13v-2.21l5.96-5.934l2.19 2.204L15.44 19zm5.96-4.985l.925-.956l-.924-.943l-.95.95z");
}
</style><path class="jft38cmjx"/>`,
		"fallback": "material-symbols-light:edit-note-sharp",
	});
}

export default Component;
