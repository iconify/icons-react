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
		"content": `<style>.ntw9sfhjl {
  fill: currentColor;
  d: path("M8 11h6V6H8zm12 11H4V2h16zm-2-2V4H6v16zm0-16H6z");
}
</style><path class="ntw9sfhjl"/>`,
		"fallback": "material-symbols:float-portrait-2-outline-sharp",
	});
}

export default Component;
