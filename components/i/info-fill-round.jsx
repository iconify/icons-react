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
		"content": `<style>.ebt7lcckq {
  fill: currentColor;
  d: path("M12.01 5a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2ZM13 18a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0Z");
}
</style><path class="ebt7lcckq"/>`,
		"fallback": "coolicons:info-fill-round",
	});
}

export default Component;
