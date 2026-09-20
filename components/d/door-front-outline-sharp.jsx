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
		"content": `<style>.kplxa0bsq {
  fill: currentColor;
  d: path("M4 20v-1h2V4h12v15h2v1zm3-1h10V5H7zm7.23-6.23q.31 0 .54-.23T15 12t-.23-.54t-.54-.23t-.539.23t-.23.54t.23.54t.54.23M7 5v14z");
}
</style><path class="kplxa0bsq"/>`,
		"fallback": "material-symbols-light:door-front-outline-sharp",
	});
}

export default Component;
