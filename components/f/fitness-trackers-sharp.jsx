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
		"content": `<style>.rkvm3iv_v {
  fill: currentColor;
  d: path("m4 22l-.9-3H2V5h1.1L4 2h6l.9 3H12v14h-1.1l-.9 3zm0-5h6V7H4zm10 5V9h-1V6h1V2h8v4h1v3h-1v13zm2-13.5V20h4V8.5zm0-2h4V4h-4z");
}
</style><path class="rkvm3iv_v"/>`,
		"fallback": "material-symbols:fitness-trackers-sharp",
	});
}

export default Component;
