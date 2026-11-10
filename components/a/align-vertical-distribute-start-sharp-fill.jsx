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
		"content": `<style>.u-hpwm85e {
  fill: currentColor;
  d: path("M23 13V15H21V20C21 20.552 20.552 21 20 21H4C3.448 21 3 20.552 3 20V15H1V13H23ZM23 3V5H17V10C17 10.552 16.552 11 16 11H8C7.448 11 7 10.552 7 10V5H1V3H23Z");
}
</style><path class="u-hpwm85e"/>`,
		"fallback": "keyline-icons:align-vertical-distribute-start-sharp-fill",
	});
}

export default Component;
