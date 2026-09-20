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
		"content": `<style>.uwaj-_b5o {
  fill: currentColor;
  d: path("M72 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12M60 116a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12M60 184a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12");
}
</style><path class="uwaj-_b5o"/>`,
		"fallback": "ph:dots-nine",
	});
}

export default Component;
