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
		"content": `<style>.ipsyi8bkb {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v18zm2-12h6V6H9z");
}
</style><path class="ipsyi8bkb"/>`,
		"fallback": "material-symbols:battery-5-bar-outline-sharp",
	});
}

export default Component;
