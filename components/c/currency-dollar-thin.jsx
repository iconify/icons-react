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
		"content": `<style>.w32_kbjiq {
  fill: currentColor;
  d: path("M152 124h-20V52h12a36 36 0 0 1 36 36a4 4 0 0 0 8 0a44.05 44.05 0 0 0-44-44h-12V24a4 4 0 0 0-8 0v20h-12a44 44 0 0 0 0 88h12v72h-20a36 36 0 0 1-36-36a4 4 0 0 0-8 0a44.05 44.05 0 0 0 44 44h20v20a4 4 0 0 0 8 0v-20h20a44 44 0 0 0 0-88m-40 0a36 36 0 0 1 0-72h12v72Zm40 80h-20v-72h20a36 36 0 0 1 0 72");
}
</style><path class="w32_kbjiq"/>`,
		"fallback": "ph:currency-dollar-thin",
	});
}

export default Component;
