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
		"content": `<style>.zcl-y3b7h {
  fill: currentColor;
  d: path("M8 22V9H7V6h1V2h8v4h1v3h-1v13zm2-13.5V20h4V8.5zm0-2h4V4h-4zm0 2h4zm0-2h4z");
}
</style><path class="zcl-y3b7h"/>`,
		"fallback": "material-symbols:device-band-outline-sharp",
	});
}

export default Component;
