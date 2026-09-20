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
		"content": `<style>.fxur3nbry {
  fill: currentColor;
  d: path("M5.23 19V8.846L2 5h19v14zm7.366-2.5l.708-.708l-1.754-1.6h5.316v-1h-7.75zm-3.48-5.692h7.75L13.404 7.5l-.708.708l1.754 1.6H9.116z");
}
</style><path class="fxur3nbry"/>`,
		"fallback": "material-symbols-light:business-messages-sharp",
	});
}

export default Component;
