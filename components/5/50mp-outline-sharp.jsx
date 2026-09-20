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
		"content": `<style>.pl89ctb9z {
  fill: currentColor;
  d: path("M12.5 11.5H17v-6h-4.5zM14 10V7h1.5v3zm-8 8.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6zm7.5 0H15V17h3v-4.5h-4.5zm1.5-3V14h1.5v1.5zM3 21V3h18v18zm2-2h14V5H5zM5 5v14zm1.5 6.5H11V8H8V7h3V5.5H6.5V9h3v1h-3z");
}
</style><path class="pl89ctb9z"/>`,
		"fallback": "material-symbols:50mp-outline-sharp",
	});
}

export default Component;
