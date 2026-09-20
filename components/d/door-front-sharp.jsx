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
		"content": `<style>.g1t5p3bvm {
  fill: currentColor;
  d: path("M4 20h16v-1h-2V4H6v15H4zm9.691-7.46q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23T15 12t-.23.54t-.54.23t-.539-.23");
}
</style><path class="g1t5p3bvm"/>`,
		"fallback": "material-symbols-light:door-front-sharp",
	});
}

export default Component;
