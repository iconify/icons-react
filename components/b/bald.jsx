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
		"content": `<style>.l1_8d-czw {
  fill: var(--svg-color--ffdc5d, #FFDC5D);
  d: path("M34.896 36C30.618 13.677 16.169 2.725 0 1.195V36h34.896z");
}
</style><path class="l1_8d-czw"/>`,
		"fallback": "twemoji:bald",
	});
}

export default Component;
