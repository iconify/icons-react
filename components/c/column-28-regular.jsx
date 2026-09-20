import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h38fq42nx {
  fill: currentColor;
  d: path("M5.75 3A2.75 2.75 0 0 1 8.5 5.75v16.5A2.75 2.75 0 0 1 5.75 25h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5zm9.5 0A2.75 2.75 0 0 1 18 5.75v16.5A2.75 2.75 0 0 1 15.25 25h-2.5A2.75 2.75 0 0 1 10 22.25V5.75A2.75 2.75 0 0 1 12.75 3zm9 0a.75.75 0 0 1 0 1.5h-2c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5h-2a2.75 2.75 0 0 1-2.75-2.75V5.75A2.75 2.75 0 0 1 22.25 3zm-11.5 1.5c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25z");
}
</style><path class="h38fq42nx"/>`,
		"fallback": "fluent:column-28-regular",
	});
}

export default Component;
