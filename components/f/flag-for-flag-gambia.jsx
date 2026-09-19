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
		"content": `<style>.zclxvabej {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M6.175 43a29 29 0 0 1-.734-2h53.117a29 29 0 0 1-.734 2zm-.734-20c.223-.666.464-1.357.734-2h51.649c.271.643.512 1.334.734 2z");
}
</style><path class="zclxvabej"/>`,
		"fallback": "emojione-monotone:flag-for-flag-gambia",
	});
}

export default Component;
