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
		"content": `<style>.y3uk37b6v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12 5.586l.293-.293a5.243 5.243 0 0 1 7.414 7.414l-7 7a1 1 0 0 1-1.414 0l-7-7a5.243 5.243 0 0 1 7.414-7.414Z");
}
</style><path class="y3uk37b6v"/>`,
		"fallback": "coolicons:heart-alt-bulk-sharp",
	});
}

export default Component;
