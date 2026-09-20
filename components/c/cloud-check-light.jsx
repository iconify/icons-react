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
		"content": `<style>.ssz4sojkv {
  fill: currentColor;
  d: path("M160 42a86.11 86.11 0 0 0-77.57 48.88A62 62 0 1 0 72 214h88a86 86 0 0 0 0-172m0 160H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.35A85.6 85.6 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 74 74m36.24-94.24a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L144 151.51l43.76-43.75a6 6 0 0 1 8.48 0");
}
</style><path class="ssz4sojkv"/>`,
		"fallback": "ph:cloud-check-light",
	});
}

export default Component;
