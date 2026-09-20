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
		"content": `<style>.j6nnt2bzu {
  fill: currentColor;
  d: path("M56.88 31.93a12 12 0 1 0-17.76 16.14L71.79 84A68 68 0 0 0 72 220h88a91.3 91.3 0 0 0 30.66-5.24l8.46 9.31a12 12 0 0 0 17.76-16.14ZM160 196H72a44 44 0 0 1-1.8-87.95A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68.2 68.2 0 0 1 2.66-18.84l77.88 85.67A68.7 68.7 0 0 1 160 196m92-68a91.32 91.32 0 0 1-17.53 54a12 12 0 1 1-19.41-14.11a68 68 0 0 0-89.57-98.53a12 12 0 0 1-12.2-20.66A92 92 0 0 1 252 128");
}
</style><path class="j6nnt2bzu"/>`,
		"fallback": "ph:cloud-slash-bold",
	});
}

export default Component;
