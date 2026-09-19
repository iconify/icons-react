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
		"content": `<style>.g81ou6aaq {
  fill: currentColor;
  d: path("M6 2h9a2 2 0 0 1 2 2v2h-2V4H6v16h9v-2h2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2");
}

.mpjke5b4e {
  fill: currentColor;
  d: path("M16.09 15.59L17.5 17l5-5l-5-5l-1.41 1.41L18.67 11H9v2h9.67z");
}
</style><path class="g81ou6aaq"/><path class="mpjke5b4e"/>`,
		"fallback": "ic:baseline-log-out",
	});
}

export default Component;
