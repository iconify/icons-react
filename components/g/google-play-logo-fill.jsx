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
		"content": `<style>.d1c3b5r_v {
  fill: currentColor;
  d: path("M239.82 114.18L72 18.16a16 16 0 0 0-16.12 0A15.68 15.68 0 0 0 48 31.87v192.26a15.68 15.68 0 0 0 7.92 13.67a16 16 0 0 0 16.12 0l167.78-96a15.76 15.76 0 0 0 0-27.64ZM160 139.31l18.92 18.92l-88.5 50.66ZM90.4 47.1l88.53 50.67L160 116.69ZM193.31 150l-22-22l22-22l38.43 22Z");
}
</style><path class="d1c3b5r_v"/>`,
		"fallback": "ph:google-play-logo-fill",
	});
}

export default Component;
