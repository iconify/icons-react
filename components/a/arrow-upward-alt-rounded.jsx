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
		"content": `<style>.lpngq9lcj {
  fill: currentColor;
  d: path("m11.5 7.416l-3.746 3.746q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354l4.389-4.388q.242-.243.565-.243t.566.243l4.388 4.388q.14.14.15.344t-.15.364t-.354.16t-.354-.16L12.5 7.416v9.392q0 .213-.143.357t-.357.143t-.357-.144t-.143-.356z");
}
</style><path class="lpngq9lcj"/>`,
		"fallback": "material-symbols-light:arrow-upward-alt-rounded",
	});
}

export default Component;
