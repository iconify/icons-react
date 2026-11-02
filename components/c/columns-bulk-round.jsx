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
		"content": `<style>.f1qicxkof {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 7a4 4 0 0 1 8 0v10a4 4 0 0 1-8 0Zm10 0a4 4 0 0 1 8 0v10a4 4 0 0 1-8 0Z");
}
</style><path class="f1qicxkof"/>`,
		"fallback": "coolicons:columns-bulk-round",
	});
}

export default Component;
