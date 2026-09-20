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
		"content": `<style>.toew7sb5s {
  fill: currentColor;
  d: path("M216 42H68.53a14 14 0 0 0-12 6.8l-45.67 76.11a6 6 0 0 0 0 6.18l45.67 76.11a14 14 0 0 0 12 6.8H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H68.53a2 2 0 0 1-1.71-1L23 128l43.82-73a2 2 0 0 1 1.71-1H216a2 2 0 0 1 2 2Zm-53.76-91.76L144.48 128l19.76 19.76a6 6 0 1 1-8.48 8.48L136 136.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L127.52 128l-19.76-19.76a6 6 0 0 1 8.48-8.48L136 119.52l19.76-19.76a6 6 0 0 1 8.48 8.48");
}
</style><path class="toew7sb5s"/>`,
		"fallback": "ph:backspace-light",
	});
}

export default Component;
