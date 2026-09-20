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
		"content": `<style>.uft-ojbmz {
  fill: currentColor;
  d: path("M8 17.308L2.692 12L8 6.692l.714.714l-4.6 4.6L8.708 16.6zm8 0l-.713-.714l4.6-4.6L15.292 7.4L16 6.692L21.308 12z");
}
</style><path class="uft-ojbmz"/>`,
		"fallback": "material-symbols-light:code",
	});
}

export default Component;
