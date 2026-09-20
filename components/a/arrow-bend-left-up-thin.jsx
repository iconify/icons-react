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
		"content": `<style>.xqwgp5bch {
  fill: currentColor;
  d: path("M204 224a4 4 0 0 1-4 4a100.11 100.11 0 0 1-100-100V41.66L58.83 82.83a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1-5.66 5.66L108 41.66V128a92.1 92.1 0 0 0 92 92a4 4 0 0 1 4 4");
}
</style><path class="xqwgp5bch"/>`,
		"fallback": "ph:arrow-bend-left-up-thin",
	});
}

export default Component;
