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
		"content": `<style>.ww9_mobwj {
  fill: currentColor;
  d: path("M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18ZM102 92a10 10 0 1 1-10-10a10 10 0 0 1 10 10m36 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10m36 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10");
}
</style><path class="ww9_mobwj"/>`,
		"fallback": "ph:dice-three-light",
	});
}

export default Component;
