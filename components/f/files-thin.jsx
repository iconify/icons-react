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
		"content": `<style>.i0rkm9bgg {
  fill: currentColor;
  d: path("m210.83 69.17l-40-40A4 4 0 0 0 168 28H88a12 12 0 0 0-12 12v20H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-20h20a12 12 0 0 0 12-12V72a4 4 0 0 0-1.17-2.83M172 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h78.34L172 105.66Zm32-32a4 4 0 0 1-4 4h-20v-84a4 4 0 0 0-1.17-2.83l-40-40A4 4 0 0 0 136 60H84V40a4 4 0 0 1 4-4h78.34L204 73.66Zm-64-32a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4");
}
</style><path class="i0rkm9bgg"/>`,
		"fallback": "ph:files-thin",
	});
}

export default Component;
