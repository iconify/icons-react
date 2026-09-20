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
		"content": `<style>.mhi530bdw {
  fill: currentColor;
  d: path("M18 7.208c0-1.114-1.346-1.672-2.133-.884l-9.543 9.543c-.788.787-.23 2.133.884 2.133h9.042A1.75 1.75 0 0 0 18 16.25z");
}
</style><path class="mhi530bdw"/>`,
		"fallback": "fluent:caret-down-right-24-filled",
	});
}

export default Component;
