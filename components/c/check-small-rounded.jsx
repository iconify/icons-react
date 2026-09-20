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
		"content": `<style>.wt98knbjr {
  fill: currentColor;
  d: path("m10 14.312l6.246-6.266q.14-.14.354-.14t.354.14t.14.354t-.14.354l-6.389 6.369q-.242.243-.565.243t-.565-.243l-2.389-2.37q-.14-.14-.14-.353t.14-.354t.354-.14t.354.14z");
}
</style><path class="wt98knbjr"/>`,
		"fallback": "material-symbols-light:check-small-rounded",
	});
}

export default Component;
