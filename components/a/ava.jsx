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
		"content": `<style>.u1pwrpbgw {
  fill: var(--svg-color--393969, #393969);
  d: path("M18.24 3H4.777c-.411 0-.501.27-.495.405v3.561c-.006.412.302.54.45.534h4.7v11.996c0 .919.874 1.491 1.407 1.491c.874.007 2.732.026 3.13 0c.406-.032.605-.443.605-.643V7.5h4.706c.321 0 .424-.321.43-.47c0-.23.013-1.304 0-2.48C19.693 3.38 18.858 3 18.234 3z");
}
</style><path class="u1pwrpbgw"/>`,
		"fallback": "token-branded:ava",
	});
}

export default Component;
