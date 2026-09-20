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
		"content": `<style>.wtlz71bmo {
  fill: currentColor;
  d: path("M4 20v-1h2V4h12v15h2v1zm3-1h10V5H7zm2.77-6.23q.309 0 .539-.23t.23-.54t-.23-.54t-.54-.23t-.54.23T9 12t.23.54t.54.23M7 5v14z");
}
</style><path class="wtlz71bmo"/>`,
		"fallback": "material-symbols-light:door-back-outline-sharp",
	});
}

export default Component;
