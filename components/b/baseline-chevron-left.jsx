import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tkn5vwbtp {
  fill: currentColor;
  d: path("M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z");
}
</style><path class="tkn5vwbtp"/>`,
		"fallback": "ic:baseline-chevron-left",
	});
}

export default Component;
