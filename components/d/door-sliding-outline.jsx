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
		"content": `<style>.j4ll43blj {
  fill: currentColor;
  d: path("M9.191 12.54q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.229.54t-.23.54t-.54.23t-.539-.23m4.539 0q-.23-.23-.23-.54t.23-.54t.54-.23t.539.23t.23.54t-.23.54t-.54.23t-.54-.23M4.5 20v-1h1V5.616q0-.691.463-1.153T7.116 4h9.769q.69 0 1.153.463t.462 1.153V19h1v1zm2-1h5V5H7.116q-.231 0-.424.192t-.192.424zm6 0h5V5.616q0-.231-.192-.424T16.884 5H12.5zm-.5-7.5");
}
</style><path class="j4ll43blj"/>`,
		"fallback": "material-symbols-light:door-sliding-outline",
	});
}

export default Component;
