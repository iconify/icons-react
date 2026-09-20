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
		"content": `<style>.unmzjybxj {
  fill: currentColor;
  d: path("M192 26H64a22 22 0 0 0-22 22v160a22 22 0 0 0 22 22h128a22 22 0 0 0 22-22V48a22 22 0 0 0-22-22m10 182a10 10 0 0 1-10 10H64a10 10 0 0 1-10-10V48a10 10 0 0 1 10-10h128a10 10 0 0 1 10 10ZM166 64a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6");
}
</style><path class="unmzjybxj"/>`,
		"fallback": "ph:device-tablet-speaker-light",
	});
}

export default Component;
