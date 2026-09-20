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
		"content": `<style>.i6rg0hmbr {
  fill: currentColor;
  d: path("M3 18v-7h1V7h16v4h1v7h-1v-2H4v2zm9.5-7H19V8h-6.5zM5 11h6.5V8H5zm-1 4h16v-3H4zm16 0H4z");
}
</style><path class="i6rg0hmbr"/>`,
		"fallback": "material-symbols-light:bed-outline-sharp",
	});
}

export default Component;
