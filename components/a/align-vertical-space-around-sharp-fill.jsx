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
		"content": `<style>.edbi2db7u {
  fill: currentColor;
  d: path("M23 19V21H1V19H23ZM17 8C17.552 8 18 8.448 18 9V15C18 15.552 17.552 16 17 16H7C6.448 16 6 15.552 6 15V9C6 8.448 6.448 8 7 8H17ZM23 3V5H1V3H23Z");
}
</style><path class="edbi2db7u"/>`,
		"fallback": "keyline-icons:align-vertical-space-around-sharp-fill",
	});
}

export default Component;
