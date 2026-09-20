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
		"content": `<style>.j-1yepbtk {
  fill: currentColor;
  d: path("M4.143 18.857Q4 18.714 4 18.5v-13q0-.213.143-.357T4.5 5t.357.143T5 5.5v13q0 .214-.143.357T4.5 19t-.357-.143M9.608 12.5l2.746 2.746q.14.14.15.344t-.15.364t-.354.16t-.354-.16l-3.388-3.389q-.131-.13-.184-.267q-.053-.136-.053-.298t.053-.298t.184-.267l3.388-3.389q.14-.14.344-.15t.364.15t.16.354t-.16.354L9.608 11.5H19.5q.214 0 .357.143T20 12t-.143.357t-.357.143z");
}
</style><path class="j-1yepbtk"/>`,
		"fallback": "material-symbols-light:horizontal-align-left-outline-rounded",
	});
}

export default Component;
