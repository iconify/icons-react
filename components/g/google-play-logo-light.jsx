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
		"content": `<style>.xxxn5cbve {
  fill: currentColor;
  d: path("M238.84 115.93L71 19.89a14 14 0 0 0-14.12 0A13.68 13.68 0 0 0 50 31.87v192.26a13.68 13.68 0 0 0 6.92 11.94a14 14 0 0 0 14.12 0l167.8-96a13.75 13.75 0 0 0 0-24.14M62 217.5v-179l89.51 89.5Zm98-81l22.19 22.19L78.4 218.07ZM78.4 37.93l103.79 59.4L160 119.52ZM233 129.58l-.1.06l-39.9 22.85L168.49 128L193 103.51l39.94 22.85l.1.06a1.76 1.76 0 0 1 0 3.16Z");
}
</style><path class="xxxn5cbve"/>`,
		"fallback": "ph:google-play-logo-light",
	});
}

export default Component;
