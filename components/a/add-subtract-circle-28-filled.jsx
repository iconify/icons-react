import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.olhr0nb5k {
  fill: currentColor;
  d: path("M15.95 17.3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM14 26c6.627 0 12-5.373 12-12S20.627 2 14 2S2 7.373 2 14s5.373 12 12 12m0-1.5a10.46 10.46 0 0 1-6.876-2.564L21.936 7.124A10.46 10.46 0 0 1 24.5 14c0 5.799-4.701 10.5-10.5 10.5M7 10.25a.75.75 0 0 1 .75-.75h1.744L9.49 7.702a.75.75 0 1 1 1.5-.003l.004 1.801h1.756a.75.75 0 0 1 0 1.5h-1.753L11 12.749a.75.75 0 1 1-1.5.002L9.497 11H7.75a.75.75 0 0 1-.75-.75");
}
</style><path class="olhr0nb5k"/>`,
		"fallback": "fluent:add-subtract-circle-28-filled",
	});
}

export default Component;
