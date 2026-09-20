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
		"content": `<style>.dhct3g3xj {
  fill: currentColor;
  d: path("M53.92 34.62A8 8 0 0 0 40 40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200h27.07l19.44 21.38a8 8 0 1 0 11.84-10.76Zm97 149.38a8 8 0 0 0-7 4l-16 28l-16-28a8 8 0 0 0-7-4H40V56h11.73L168.1 184ZM232 56v130a8 8 0 0 1-16 0V56H98.52a8 8 0 1 1 0-16H216a16 16 0 0 1 16 16");
}
</style><path class="dhct3g3xj"/>`,
		"fallback": "ph:chat-centered-slash",
	});
}

export default Component;
