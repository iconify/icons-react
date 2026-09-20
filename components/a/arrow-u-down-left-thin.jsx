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
		"content": `<style>.olmnmyciw {
  fill: currentColor;
  d: path("M228 112a60.07 60.07 0 0 1-60 60H41.66l41.17 41.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 0 1 5.66 5.66L41.66 164H168a52 52 0 0 0 0-104H80a4 4 0 0 1 0-8h88a60.07 60.07 0 0 1 60 60");
}
</style><path class="olmnmyciw"/>`,
		"fallback": "ph:arrow-u-down-left-thin",
	});
}

export default Component;
