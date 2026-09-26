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
		"content": `<style>.deb0atb5f {
  fill: currentColor;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM12 7C11.4477 7 11 7.4477 11 8C11 8.5523 11.4477 9 12 9C12.5523 9 13 8.5523 13 8C13 7.4477 12.5523 7 12 7ZM11 11L11 17L13 17L13 11L11 11Z");
}
</style><path class="deb0atb5f"/>`,
		"fallback": "keyline-icons:info-sharp-fill",
	});
}

export default Component;
