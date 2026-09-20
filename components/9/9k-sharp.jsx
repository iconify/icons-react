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
		"content": `<style>.scqqnpbid {
  fill: currentColor;
  d: path("M6.5 15H11V9H6.5v3.5h3v1h-3zM8 11.5V10h1.5v1.5zm5 3.5h1.5v-2.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13zM3 21V3h18v18z");
}
</style><path class="scqqnpbid"/>`,
		"fallback": "material-symbols:9k-sharp",
	});
}

export default Component;
