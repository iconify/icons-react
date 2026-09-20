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
		"content": `<style>.g2ez-8b7v {
  fill: currentColor;
  d: path("M1 14V9.5h3V14zm4.75 0V8h3v6zm4.75 0V7h3v7zM1 20v-4h3v4zm4.75 0v-4h3v4zm4.75 0v-4h3v4zm9.5-8V4h3v9q-.625-.475-1.388-.737T20 12m-1.75.325q-.675.25-1.25.675t-1 1h-.75V6h3zM19 20v-2h-2v-2h2v-2h2v2h2v2h-2v2z");
}
</style><path class="g2ez-8b7v"/>`,
		"fallback": "material-symbols:android-cell-dual-5-bar-plus-outline-sharp",
	});
}

export default Component;
