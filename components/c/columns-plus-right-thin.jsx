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
		"content": `<style>.cx1qdhbpn {
  fill: currentColor;
  d: path("M80 36H56a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm68-172h-24a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm88-80a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4");
}
</style><path class="cx1qdhbpn"/>`,
		"fallback": "ph:columns-plus-right-thin",
	});
}

export default Component;
