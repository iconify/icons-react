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
		"content": `<style>.s8j3vgb4d {
  fill: currentColor;
  d: path("M6.808 18q-.348 0-.578-.23T6 17.192V9.5q0-.213.143-.357T6.5 9t.357.143T7 9.5v6.792L17.939 5.354q.14-.14.344-.15t.363.15t.16.354t-.16.353L7.708 17H14.5q.214 0 .357.143T15 17.5t-.143.357T14.5 18z");
}
</style><path class="s8j3vgb4d"/>`,
		"fallback": "material-symbols-light:call-received-outline-rounded",
	});
}

export default Component;
