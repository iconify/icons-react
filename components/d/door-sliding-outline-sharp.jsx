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
		"content": `<style>.ryw4k4ybv {
  fill: currentColor;
  d: path("M9.191 12.54q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.229.54t-.23.54t-.54.23t-.539-.23m4.539 0q-.23-.23-.23-.54t.23-.54t.54-.23t.539.23t.23.54t-.23.54t-.54.23t-.54-.23M4.5 20v-1h1V4h13v15h1v1zm2-1h5V5h-5zm6 0h5V5h-5zm-.5-7.5");
}
</style><path class="ryw4k4ybv"/>`,
		"fallback": "material-symbols-light:door-sliding-outline-sharp",
	});
}

export default Component;
