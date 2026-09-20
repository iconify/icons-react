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
		"content": `<style>.p6nj0gbhk {
  fill: currentColor;
  d: path("M4 20v-3.366l8.777-8.776l-1.815-1.785l.719-.708l2.323 2.304l3.935-3.953l2.327 2.365l-3.949 3.948l2.324 2.354l-.714.713l-1.823-1.834L7.366 20zm1-1h1.989l8.434-8.484l-1.939-1.939L5 17.012z");
}
</style><path class="p6nj0gbhk"/>`,
		"fallback": "material-symbols-light:colorize-sharp",
	});
}

export default Component;
