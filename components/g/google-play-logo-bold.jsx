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
		"content": `<style>.f6apj5hed {
  fill: currentColor;
  d: path("M241.79 110.7L74 14.65a20.24 20.24 0 0 0-20.12.06A19.62 19.62 0 0 0 44 31.84v192.32a19.62 19.62 0 0 0 9.91 17.13a20.22 20.22 0 0 0 20.12.06l167.76-96a19.76 19.76 0 0 0 0-34.6ZM68 203V53l75 75Zm92-58l12.4 12.4l-58 33.2Zm-45.59-79.57l58 33.2L160 111ZM194 145l-17-17l17-17l29.72 17Z");
}
</style><path class="f6apj5hed"/>`,
		"fallback": "ph:google-play-logo-bold",
	});
}

export default Component;
