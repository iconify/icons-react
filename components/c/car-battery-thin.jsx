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
		"content": `<style>.tgvyq2b9c {
  fill: currentColor;
  d: path("M188 136a4 4 0 0 1-4 4h-12v12a4 4 0 0 1-8 0v-12h-12a4 4 0 0 1 0-8h12v-12a4 4 0 0 1 8 0v12h12a4 4 0 0 1 4 4m-84-4H72a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m132-44v96a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V88a12 12 0 0 1 12-12h20V56a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v20h40V56a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v20h20a12 12 0 0 1 12 12m-80-12h40V56a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4Zm-96 0h40V56a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4Zm168 12a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4Z");
}
</style><path class="tgvyq2b9c"/>`,
		"fallback": "ph:car-battery-thin",
	});
}

export default Component;
