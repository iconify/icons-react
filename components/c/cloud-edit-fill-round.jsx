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
		"content": `<style>.tapmchm3j {
  fill: currentColor;
  d: path("M6.26 8.045C6.794 6.596 7.715 5.283 9 4.408a6.17 6.17 0 0 1 4.398-1.022a6 6 0 0 1 2.151.755c2.147 1.246 3.217 3.547 3.415 5.951A5.002 5.002 0 0 1 18 20H7a6 6 0 0 1-.74-11.955M8 14v2a1 1 0 0 0 1 1h2c.265 0 .52-.105.707-.293l4-4a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 0l-4 4A1 1 0 0 0 8 14");
}
</style><path class="tapmchm3j"/>`,
		"fallback": "coolicons:cloud-edit-fill-round",
	});
}

export default Component;
