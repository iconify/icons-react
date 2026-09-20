import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vmp7uihfy {
  fill: currentColor;
  d: path("M21.65 3.434a4.889 4.889 0 1 1 6.915 6.914l-.902.901l-6.914-6.914zM19.335 5.75L4.357 20.73a3.7 3.7 0 0 0-1.002 1.84l-1.333 6.22a1 1 0 0 0 1.188 1.188l6.22-1.333a3.7 3.7 0 0 0 1.84-1.002l2.096-2.095a9 9 0 0 1 11.182-11.183l1.701-1.701zM22 30.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0-2a5.47 5.47 0 0 1-3.117-.967l7.649-7.65A5.5 5.5 0 0 1 22 28.5m3.118-10.03l-7.65 7.648a5.5 5.5 0 0 1 7.65-7.65");
}
</style><path class="vmp7uihfy"/>`,
		"fallback": "fluent:edit-prohibited-32-filled",
	});
}

export default Component;
