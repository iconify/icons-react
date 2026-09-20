import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nsgitz5hk {
  fill: var(--svg-color--ffd983, #ffd983);
  d: path("M30.312.776C32 19 20 32 .776 30.312c8.199 7.717 21.091 7.588 29.107-.429C37.9 21.867 38.03 8.975 30.312.776");
}

.tbu_usbfu {
  fill: var(--svg-color--ffcc4d, #ffcc4d);
  d: path("M30.705 15.915a1.163 1.163 0 1 0 1.643 1.641a1.163 1.163 0 0 0-1.643-1.641m-16.022 14.38a1.74 1.74 0 0 0 0 2.465a1.742 1.742 0 1 0 0-2.465m13.968-2.147a2.904 2.904 0 0 1-4.108 0a2.9 2.9 0 0 1 0-4.107a2.9 2.9 0 0 1 4.108 0a2.9 2.9 0 0 1 0 4.107");
}
</style><path class="nsgitz5hk"/><path class="tbu_usbfu"/>`,
		"fallback": "twemoji:crescent-moon",
	});
}

export default Component;
