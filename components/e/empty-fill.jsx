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
		"content": `<style>.ni0-izsog {
  fill: currentColor;
  d: path("M170.49 91.59A56 56 0 0 1 97.54 175ZM128 72a56 56 0 0 0-42.49 92.41l73-83.37A55.67 55.67 0 0 0 128 72m104 56A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104m-32 0a71.68 71.68 0 0 0-18.89-48.55l4.89-6.18a8 8 0 1 0-12-10.54l-4.91 6.18a72 72 0 0 0-94.2 107.64L70 182.73a8 8 0 0 0 12 10.54l4.91-6.18A71.95 71.95 0 0 0 200 128");
}
</style><path class="ni0-izsog"/>`,
		"fallback": "ph:empty-fill",
	});
}

export default Component;
