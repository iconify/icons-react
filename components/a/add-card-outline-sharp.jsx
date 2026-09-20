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
		"content": `<style>.ww04fib-w {
  fill: currentColor;
  d: path("M3 19V5h18v6.192H4V18h9.192v1zM4 8.808h16V6H4zM19.5 21.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM4 18V6z");
}
</style><path class="ww04fib-w"/>`,
		"fallback": "material-symbols-light:add-card-outline-sharp",
	});
}

export default Component;
