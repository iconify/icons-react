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
		"content": `<style>.o7hn0fh2x {
  fill: currentColor;
  d: path("M9 17h6V6H9v11Zm-2 5V4h3V2h4v2h3v18H7Z");
}
</style><path class="o7hn0fh2x"/>`,
		"fallback": "material-symbols:battery-vert-020-sharp",
	});
}

export default Component;
