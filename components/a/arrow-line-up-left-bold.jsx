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
		"content": `<style>.wu-00sb_y {
  fill: currentColor;
  d: path("M236 208a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M72 156a12 12 0 0 0 12-12V77l91.51 91.52a12 12 0 0 0 17-17L101 60h67a12 12 0 0 0 0-24H72a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12");
}
</style><path class="wu-00sb_y"/>`,
		"fallback": "ph:arrow-line-up-left-bold",
	});
}

export default Component;
