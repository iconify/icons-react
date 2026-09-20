import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c94frgwoc {
  fill: currentColor;
  d: path("M184 18H72a14 14 0 0 0-14 14v45.33a14 14 0 0 0 2.8 8.4l20.8 27.73a2 2 0 0 1 .4 1.21V224a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14V114.67a2 2 0 0 1 .4-1.2l20.8-27.74a14 14 0 0 0 2.8-8.4V32a14 14 0 0 0-14-14M72 30h112a2 2 0 0 1 2 2v26H70V32a2 2 0 0 1 2-2m113.6 48.53l-20.8 27.74a14 14 0 0 0-2.8 8.4V224a2 2 0 0 1-2 2H96a2 2 0 0 1-2-2V114.67a14 14 0 0 0-2.8-8.4L70.4 78.54a2 2 0 0 1-.4-1.21V70h116v7.33a2 2 0 0 1-.4 1.2M134 120v32a6 6 0 0 1-12 0v-32a6 6 0 0 1 12 0");
}
</style><path class="c94frgwoc"/>`,
		"fallback": "ph:flashlight-light",
	});
}

export default Component;
