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
		"content": `<style>.v6f9nybwl {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m63.34 91.83l-50.4 16.38l31.15 42.87a8 8 0 1 1-12.94 9.4L128 141.61l-31.15 42.87a8 8 0 0 1-12.94-9.4l31.15-42.87l-50.4-16.38a8 8 0 0 1 4.94-15.22L120 117V64a8 8 0 0 1 16 0v53l50.4-16.38a8 8 0 0 1 4.94 15.22Z");
}
</style><path class="v6f9nybwl"/>`,
		"fallback": "ph:asterisk-simple-fill",
	});
}

export default Component;
