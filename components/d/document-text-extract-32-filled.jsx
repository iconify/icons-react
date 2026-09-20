import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nfow-6bva {
  fill: currentColor;
  d: path("M17 9a3 3 0 0 0 3 3h7v15a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-4.5h8a2.5 2.5 0 0 0 0-5H5V5a3 3 0 0 1 3-3h9zm-6 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm2-5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm-2-5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm8-11.884c.484.14.93.4 1.293.763l5.828 5.828A3 3 0 0 1 26.884 10H20a1 1 0 0 1-1-1z");
}
</style><path class="nfow-6bva"/>`,
		"fallback": "fluent:document-text-extract-32-filled",
	});
}

export default Component;
