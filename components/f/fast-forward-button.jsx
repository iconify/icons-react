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
		"content": `<style>.adf2rnb3e {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m.705 48V38.121L19.918 50V14l12.787 11.879V14l19.377 18z");
}
</style><path class="adf2rnb3e"/>`,
		"fallback": "emojione-monotone:fast-forward-button",
	});
}

export default Component;
