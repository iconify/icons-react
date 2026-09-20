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
		"content": `<style>.dlv-f0b-k {
  fill: currentColor;
  d: path("M232 124h-46.32A68 68 0 0 0 128 20a4 4 0 0 0-4 4v46.32A68 68 0 0 0 20 128a4 4 0 0 0 4 4h46.32A68 68 0 0 0 128 236a4 4 0 0 0 4-4v-46.32A68 68 0 0 0 236 128a4 4 0 0 0-4-4m-44-36a59.28 59.28 0 0 1-12 36h-44V28.13A60.08 60.08 0 0 1 188 88M88 68a59.28 59.28 0 0 1 36 12v44H28.13A60.08 60.08 0 0 1 88 68M68 168a59.28 59.28 0 0 1 12-36h44v95.87A60.08 60.08 0 0 1 68 168m100 20a59.28 59.28 0 0 1-36-12v-44h95.87A60.08 60.08 0 0 1 168 188");
}
</style><path class="dlv-f0b-k"/>`,
		"fallback": "ph:google-photos-logo-thin",
	});
}

export default Component;
