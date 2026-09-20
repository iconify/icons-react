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
		"content": `<style>.xqig70b_z {
  fill: currentColor;
  d: path("M232 218h-56a102 102 0 1 0-48 12h104a6 6 0 0 0 0-12M38 128a90 90 0 1 1 90 90a90.1 90.1 0 0 1-90-90m90-26a22 22 0 1 0-22-22a22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10a10 10 0 0 1 10-10m22 106a22 22 0 1 0-22 22a22 22 0 0 0 22-22m-32 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m58-26a22 22 0 1 0-22-22a22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10a10 10 0 0 1 10-10m-96-12a22 22 0 1 0 22 22a22 22 0 0 0-22-22m0 32a10 10 0 1 1 10-10a10 10 0 0 1-10 10");
}
</style><path class="xqig70b_z"/>`,
		"fallback": "ph:film-reel-light",
	});
}

export default Component;
