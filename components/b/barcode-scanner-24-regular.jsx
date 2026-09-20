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
		"content": `<style>.ululeqbyd {
  fill: currentColor;
  d: path("M2 5.75A2.75 2.75 0 0 1 4.75 3h1.5a.75.75 0 0 1 0 1.5h-1.5c-.69 0-1.25.56-1.25 1.25v1.5a.75.75 0 0 1-1.5 0zm15-2a.75.75 0 0 1 .75-.75h1.5A2.75 2.75 0 0 1 22 5.75v1.5a.75.75 0 0 1-1.5 0v-1.5c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 0 1-.75-.75M2.75 16a.75.75 0 0 1 .75.75v1.5c0 .69.56 1.25 1.25 1.25h1.5a.75.75 0 0 1 0 1.5h-1.5A2.75 2.75 0 0 1 2 18.25v-1.5a.75.75 0 0 1 .75-.75m18.5 0a.75.75 0 0 1 .75.75v1.5A2.75 2.75 0 0 1 19.25 21h-1.5a.75.75 0 0 1 0-1.5h1.5c.69 0 1.25-.56 1.25-1.25v-1.5a.75.75 0 0 1 .75-.75M5.75 7a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5A.75.75 0 0 1 5.75 7m4.75.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0zM13.75 7a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75m4.75.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="ululeqbyd"/>`,
		"fallback": "fluent:barcode-scanner-24-regular",
	});
}

export default Component;
