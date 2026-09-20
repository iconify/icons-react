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
		"content": `<style>.uqz7hr6ov {
  fill: currentColor;
  d: path("M5 22v-8H2V2h10l-2 7h4zm9.625-11L18 2h1.6l3.425 9h-1.55l-.8-2.3h-3.7l-.8 2.3zm2.8-3.6h2.75L18.85 3.65h-.05z");
}
</style><path class="uqz7hr6ov"/>`,
		"fallback": "material-symbols:flash-auto-sharp",
	});
}

export default Component;
