import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rdx1kss1a {
  fill: currentColor;
  d: path("M5 20a1.25 1.25 0 0 1-.582-.14c-.712-.371-.835-1.242-.549-1.932c.098-.237.242-.453.424-.635l5-5a.414.414 0 0 0 0-.586l-5-5a2 2 0 0 1-.424-.635c-.286-.69-.163-1.561.549-1.932c.18-.093.379-.141.582-.14h8c.265 0 .52.105.707.293l6 6a2.414 2.414 0 0 1 0 3.414l-6 6A1 1 0 0 1 13 20Z");
}
</style><path class="rdx1kss1a"/>`,
		"fallback": "coolicons:arrow-badge-right-fill",
	});
}

export default Component;
