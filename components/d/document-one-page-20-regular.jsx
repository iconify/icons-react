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
		"content": `<style>.cys0_xbyi {
  fill: currentColor;
  d: path("M6 2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm7 3.5a.5.5 0 0 1-.41.492L12.5 7h-5a.5.5 0 0 1-.09-.992L7.5 6h5a.5.5 0 0 1 .5.5m0 3.5a.5.5 0 0 1-.41.492l-.09.008h-5a.5.5 0 0 1-.09-.992L7.5 9.5h5a.5.5 0 0 1 .5.5m0 3.5a.5.5 0 0 1-.41.492L12.5 14h-5a.5.5 0 0 1-.09-.992L7.5 13h5a.5.5 0 0 1 .5.5");
}
</style><path class="cys0_xbyi"/>`,
		"fallback": "fluent:document-one-page-20-regular",
	});
}

export default Component;
