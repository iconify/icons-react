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
		"content": `<style>.dcfk_8_lw {
  fill: currentColor;
  d: path("M212 232a12 12 0 0 1-12 12H56a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12M76 184V40a20 20 0 0 1 20-20h64a20 20 0 0 1 20 20v144a20 20 0 0 1-20 20H96a20 20 0 0 1-20-20m24-4h56V44h-56Z");
}
</style><path class="dcfk_8_lw"/>`,
		"fallback": "ph:align-bottom-simple-bold",
	});
}

export default Component;
