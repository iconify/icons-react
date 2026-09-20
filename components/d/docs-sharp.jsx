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
		"content": `<style>.ngma_9qff {
  fill: currentColor;
  d: path("M12 2v7h7v13H5V2zm2 0l5 5h-5zM9 19h4v-2H9zm0-4h6v-2H9z");
}
</style><path class="ngma_9qff"/>`,
		"fallback": "material-symbols:docs-sharp",
	});
}

export default Component;
