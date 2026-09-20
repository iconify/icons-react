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
		"content": `<style>.ui0owbc7e {
  fill: currentColor;
  d: path("M217.9 73.42L182.58 38.1a13.9 13.9 0 0 0-9.89-4.1H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V83.31a13.9 13.9 0 0 0-4.1-9.89M170 210H86v-58a2 2 0 0 1 2-2h80a2 2 0 0 1 2 2Zm40-2a2 2 0 0 1-2 2h-26v-58a14 14 0 0 0-14-14H88a14 14 0 0 0-14 14v58H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h124.69a2 2 0 0 1 1.41.58l35.32 35.32a2 2 0 0 1 .58 1.41ZM158 72a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h56a6 6 0 0 1 6 6");
}
</style><path class="ui0owbc7e"/>`,
		"fallback": "ph:floppy-disk-light",
	});
}

export default Component;
