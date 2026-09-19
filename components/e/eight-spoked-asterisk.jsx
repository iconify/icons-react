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
		"content": `<style>.l_wxmtbbz {
  fill: currentColor;
  d: path("m62 32l-24.166-2.417l15.379-18.797l-18.797 15.38L32 2l-2.417 24.166l-18.797-15.38l15.38 18.797L2 32l24.166 2.416l-15.38 18.797l18.797-15.379L32 62l2.416-24.166l18.797 15.379l-15.379-18.797z");
}
</style><path class="l_wxmtbbz"/>`,
		"fallback": "emojione-monotone:eight-spoked-asterisk",
	});
}

export default Component;
