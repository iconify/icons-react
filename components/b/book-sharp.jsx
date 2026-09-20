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
		"content": `<style>.s90rsqb4w {
  fill: currentColor;
  d: path("M5 21V3h14v18zm7-10.885l2-1.192l2 1.192V4h-4z");
}
</style><path class="s90rsqb4w"/>`,
		"fallback": "material-symbols-light:book-sharp",
	});
}

export default Component;
