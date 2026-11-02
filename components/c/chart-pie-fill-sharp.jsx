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
		"content": `<style>.cd560hbwb {
  fill: currentColor;
  d: path("M11 2.049V13h.586l6.743 6.744A10 10 0 0 1 2.26 9.735A10 10 0 0 1 11 2.049M13 11V2.049A10.01 10.01 0 0 1 21.951 11Zm5.321 5.906l-1.025-1.024l-.003-.003L14.414 13h7.537a10 10 0 0 1-2.207 5.329Z");
}
</style><path class="cd560hbwb"/>`,
		"fallback": "coolicons:chart-pie-fill-sharp",
	});
}

export default Component;
