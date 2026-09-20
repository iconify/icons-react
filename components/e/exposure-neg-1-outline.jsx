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
		"content": `<style>.fzm3qb5pc {
  fill: currentColor;
  d: path("M10 14H3v-2h7zm5.75 5V8.05l-2.3 1.65l-1.15-1.75L16.4 5H18v14z");
}
</style><path class="fzm3qb5pc"/>`,
		"fallback": "material-symbols:exposure-neg-1-outline",
	});
}

export default Component;
