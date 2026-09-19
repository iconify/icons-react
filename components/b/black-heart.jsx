import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ect-16b2h {
  fill: currentColor;
  d: path("M61.072 18.16c-6.395-16.919-27.154-9.328-29.074-.879c-2.64-9.004-22.89-15.721-29.07.891C-3.953 36.674 29.598 53.279 31.999 56c2.397-2.162 35.951-19.639 29.073-37.84");
}
</style><path class="ect-16b2h"/>`,
		"fallback": "emojione-monotone:black-heart",
	});
}

export default Component;
