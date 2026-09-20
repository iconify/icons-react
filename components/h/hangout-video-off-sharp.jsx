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
		"content": `<style>.pwa4r6bbl {
  fill: currentColor;
  d: path("M20.5 23.3L17.15 20H2V4h2l.6.6v2.8L.7 3.5l1.4-1.4l19.8 19.8zm1.5-4.15l-4-4V8l-4 3.15v-3.1h-3.1L6.85 4H22zM6 16h7.15L6 8.85z");
}
</style><path class="pwa4r6bbl"/>`,
		"fallback": "material-symbols:hangout-video-off-sharp",
	});
}

export default Component;
