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
		"content": `<style>.t2femrb6p {
  fill: currentColor;
  d: path("M18 15v-2h3v2zm0 4v-2h3v2zm-6 1v-2h-2v-4h2v-2h5v8zm-9-3V9h7V6H4V4h8v7H5v4h4v2z");
}
</style><path class="t2femrb6p"/>`,
		"fallback": "material-symbols:electrical-services-sharp",
	});
}

export default Component;
