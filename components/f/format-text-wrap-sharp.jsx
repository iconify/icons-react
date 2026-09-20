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
		"content": `<style>.xdkdzugos {
  fill: currentColor;
  d: path("M5 19V5h1v14zm13 0V5h1v14zm-7.13-2.161L8.03 14l2.84-2.814l.688.689L9.933 13.5h2.798q1.056 0 1.778-.722T15.23 11t-.722-1.778T12.73 8.5H7.769v-1h4.962q1.458 0 2.479 1.021Q16.23 9.542 16.23 11t-1.02 2.479t-2.48 1.021H9.934l1.625 1.625z");
}
</style><path class="xdkdzugos"/>`,
		"fallback": "material-symbols-light:format-text-wrap-sharp",
	});
}

export default Component;
