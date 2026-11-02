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
		"content": `<style>.ac36-yj6s {
  fill: currentColor;
  d: path("M12.414 5H17a5 5 0 0 1 5 5v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21H7a5 5 0 0 1-5-5V6a3 3 0 0 1 3-3h5c.265 0 .52.105.707.293Zm-5.121 8.707l2 2a.999.999 0 1 0 1.414-1.414L9.414 13l1.293-1.293a.999.999 0 1 0-1.414-1.414l-2 2a.997.997 0 0 0 0 1.414m9.414-1.414l-2-2a.999.999 0 1 0-1.414 1.414L14.586 13l-1.293 1.293a.999.999 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414");
}
</style><path class="ac36-yj6s"/>`,
		"fallback": "coolicons:folder-code-fill-round",
	});
}

export default Component;
