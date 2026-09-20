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
		"content": `<style>.e65-1ibek {
  fill: var(--svg-color--d2d2d2, #d2d2d2);
  d: path("M7.6 24.4V2H2v28h16.8v-5.6h-5.6Z");
}

.ft5dv1b6b {
  fill: none;
}

.k-h76sbmj {
  fill: var(--svg-color--1fd5f9, #1fd5f9);
  d: path("M18.8 13.2h-5.6v5.6h5.6zm5.6-5.6h-5.6v5.6h5.6zm0 11.2h-5.6v5.6h5.6zM30 2h-5.6v5.6H30zm0 22.4h-5.6V30H30z");
}
</style><g class="ft5dv1b6b"><path class="k-h76sbmj"/><path class="e65-1ibek"/></g>`,
		"fallback": "vscode-icons:file-type-livekit",
	});
}

export default Component;
