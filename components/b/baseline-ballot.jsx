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
		"content": `<style>.rz3u2bcur {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 9.5h5v-2h-5zm0 7h5v-2h-5zm6 4.5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2M6 11h5V6H6zm1-4h3v3H7zM6 18h5v-5H6zm1-4h3v3H7z");
}
</style><path class="rz3u2bcur"/>`,
		"fallback": "ic:baseline-ballot",
	});
}

export default Component;
