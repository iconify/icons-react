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
		"content": `<style>.a1qkg-blr {
  fill: currentColor;
  d: path("M14.08 8.8a1.75 1.75 0 0 0-1.33 1.7v3a3.25 3.25 0 0 1-2.815 3.221A4.001 4.001 0 1 1 9.92 15.2a1.75 1.75 0 0 0 1.33-1.699v-3a3.25 3.25 0 0 1 2.815-3.221A4.001 4.001 0 0 1 22 8a4 4 0 0 1-7.92.8");
}
</style><path class="a1qkg-blr"/>`,
		"fallback": "fluent:flow-24-filled",
	});
}

export default Component;
