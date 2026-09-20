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
		"content": `<style>.i8zpe9b9s {
  fill: currentColor;
  d: path("M10 14v-2.615l9.683-9.683l2.56 2.564L12.518 14zm9.466-8.354l1.347-1.361l-1.111-1.17l-1.387 1.381zM4 20V4h10.002l-6.386 6.387v5.998h5.896L20 9.895V20z");
}
</style><path class="i8zpe9b9s"/>`,
		"fallback": "material-symbols-light:edit-square-sharp",
	});
}

export default Component;
