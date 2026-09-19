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
		"content": `<style>.fpin9c8hn {
  fill: currentColor;
  d: path("M18 6V4l-2-2h-5L9 4v2H5v11s1 2 2 2h13s2-.98 2-2V6zM4 9H2v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H4zm7-4c0-.55.53-1 1-1h3c.46 0 1 .54 1 1v1h-5zM5 6h17v11c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2z");
}
</style><path class="fpin9c8hn"/>`,
		"fallback": "ic:baseline-cases",
	});
}

export default Component;
