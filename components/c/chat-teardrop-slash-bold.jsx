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
		"content": `<style>.dovy7vbfk {
  fill: currentColor;
  d: path("M56.88 31.93a12 12 0 1 0-17.76 16.14L50 60a103.37 103.37 0 0 0-22 64v84a20 20 0 0 0 20 20h84a104.3 104.3 0 0 0 55.87-16.31l11.25 12.38a12 12 0 0 0 17.76-16.14ZM132 204H52v-80a79.5 79.5 0 0 1 14.46-45.86l105 115.49A79.1 79.1 0 0 1 132 204m104-80a102.9 102.9 0 0 1-10.36 45.29A12 12 0 0 1 204 158.83a79.25 79.25 0 0 0 8-34.83a80.07 80.07 0 0 0-107.84-75a12 12 0 0 1-8.35-22.5A104.07 104.07 0 0 1 236 124");
}
</style><path class="dovy7vbfk"/>`,
		"fallback": "ph:chat-teardrop-slash-bold",
	});
}

export default Component;
