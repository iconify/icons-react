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
		"content": `<style>.wptt8kbso {
  fill: currentColor;
  d: path("M6 19V1h9l6 6v12zm8-11h5l-5-5zM2 23V7h2v14h11v2z");
}
</style><path class="wptt8kbso"/>`,
		"fallback": "material-symbols:file-copy-sharp",
	});
}

export default Component;
