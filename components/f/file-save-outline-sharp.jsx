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
		"content": `<style>.y6mmsgbby {
  fill: currentColor;
  d: path("m18 21l4-4l-1.4-1.4l-1.6 1.6v-4.175h-2V17.2l-1.6-1.6L14 17zm-4 3v-2h8v2zM4 20V2h9l6 6v3.025h-2V9h-5V4H6v14h6v2zm2-2V4z");
}
</style><path class="y6mmsgbby"/>`,
		"fallback": "material-symbols:file-save-outline-sharp",
	});
}

export default Component;
