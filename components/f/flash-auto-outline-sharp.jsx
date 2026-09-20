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
		"content": `<style>.obc54jjkr {
  fill: currentColor;
  d: path("m7 15.6l3.2-4.6H7.35l2-7H4v8h3zM5 22v-8H2V2h10l-2 7h4zm2-10H4zm7.625-1L18 2h1.6l3.425 9h-1.55l-.8-2.3h-3.7l-.8 2.3zm2.8-3.6h2.75L18.85 3.65h-.05z");
}
</style><path class="obc54jjkr"/>`,
		"fallback": "material-symbols:flash-auto-outline-sharp",
	});
}

export default Component;
