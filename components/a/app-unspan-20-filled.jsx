import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bqtpq1brx {
  fill: currentColor;
  d: path("M7 2a2 2 0 0 0-2 2v3.085a1.5 1.5 0 0 1 1.56.354l2 2a1.5 1.5 0 0 1 0 2.122l-2 2a1.5 1.5 0 0 1-1.56.354V16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.085a1.5 1.5 0 0 1-1.56-.354l-2-2a1.5 1.5 0 0 1 0-2.122l2-2A1.5 1.5 0 0 1 15 7.085V4a2 2 0 0 0-2-2zm7.854 6.146a.5.5 0 0 1 0 .708L13.707 10H16.5a.5.5 0 0 1 0 1h-2.792l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0m-9.708.708a.5.5 0 1 1 .707-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.707-.708L6.292 11H3.5a.5.5 0 0 1 0-1h2.792z");
}
</style><path class="bqtpq1brx"/>`,
		"fallback": "fluent:app-unspan-20-filled",
	});
}

export default Component;
