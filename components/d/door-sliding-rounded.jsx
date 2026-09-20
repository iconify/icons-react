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
		"content": `<style>.q-8897ber {
  fill: currentColor;
  d: path("M10.27 12.54q.23-.23.23-.54t-.23-.54t-.54-.23t-.539.23t-.23.54t.23.54t.54.23t.54-.23m4.538 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.229.54t.23.54t.54.23t.539-.23M5 20q-.213 0-.357-.143T4.5 19.5q0-.208.16-.322q.161-.114.34-.178h.5V5.616q0-.672.472-1.144T7.116 4h4.5v15h.769V4h4.5q.67 0 1.143.472q.472.472.472 1.144V19h.5q.214 0 .357.143t.143.357t-.143.357T19 20z");
}
</style><path class="q-8897ber"/>`,
		"fallback": "material-symbols-light:door-sliding-rounded",
	});
}

export default Component;
