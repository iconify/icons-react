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
		"content": `<style>.dzdl8zk4v {
  fill: currentColor;
  d: path("M5 1V3H10C10.552 3 11 3.448 11 4V20C11 20.552 10.552 21 10 21H5V23H3V1H5ZM15 1V7H20C20.552 7 21 7.448 21 8V16C21 16.552 20.552 17 20 17H15V23H13V1H15Z");
}
</style><path class="dzdl8zk4v"/>`,
		"fallback": "keyline-icons:align-horizontal-distribute-start-sharp-fill",
	});
}

export default Component;
