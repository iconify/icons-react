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
		"content": `<style>.gnb-xacvq {
  fill: currentColor;
  d: path("M10.91 15.242q-.168 0-.289-.11q-.121-.112-.121-.293V9.162q0-.182.124-.293t.288-.111q.042 0 .284.13l2.677 2.678q.093.092.143.199t.05.235t-.05.235t-.143.2l-2.677 2.677q-.055.055-.129.093q-.073.037-.157.037");
}
</style><path class="gnb-xacvq"/>`,
		"fallback": "material-symbols-light:arrow-right-rounded",
	});
}

export default Component;
