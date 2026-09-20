import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wsshu9z8m {
  fill: currentColor;
  d: path("M23.75 44c-.69 0-1.25-.56-1.25-1.25V40h-6.25A4.25 4.25 0 0 1 12 35.75v-5.5A4.25 4.25 0 0 1 16.25 26h6.25v-4H12.25A4.25 4.25 0 0 1 8 17.75v-5.5A4.25 4.25 0 0 1 12.25 8H22.5V5.25a1.25 1.25 0 1 1 2.5 0V8h10.75A4.25 4.25 0 0 1 40 12.25v5.5A4.25 4.25 0 0 1 35.75 22H25v4h6.75A4.25 4.25 0 0 1 36 30.25v5.5A4.25 4.25 0 0 1 31.75 40H25v2.75c0 .69-.56 1.25-1.25 1.25");
}
</style><path class="wsshu9z8m"/>`,
		"fallback": "fluent:align-center-vertical-48-filled",
	});
}

export default Component;
