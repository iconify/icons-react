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
		"content": `<style>.oczdx4bdv {
  fill: currentColor;
  d: path("M208 156H48a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12m4 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM48.23 132h159.54a12 12 0 0 0 11.23-7.33a11.68 11.68 0 0 0-2.33-12.8L143 34.37a20.75 20.75 0 0 0-29.92 0l-73.78 77.5a11.68 11.68 0 0 0-2.3 12.8A12 12 0 0 0 48.23 132m-3.13-14.61l73.73-77.51a12.78 12.78 0 0 1 18.34 0l73.73 77.51a3.66 3.66 0 0 1 .77 4.12a4.1 4.1 0 0 1-3.9 2.49H48.23a4.1 4.1 0 0 1-3.9-2.49a3.66 3.66 0 0 1 .77-4.12");
}
</style><path class="oczdx4bdv"/>`,
		"fallback": "ph:eject-thin",
	});
}

export default Component;
