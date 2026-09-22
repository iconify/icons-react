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
		"content": `<style>.y4wcp7b2z {
  fill: currentColor;
  d: path("M11 22v-8h11v8zm2-2h7v-4h-7zM3 20V4h18v8h-6.5v-1.5h2v.5H18V9h-5v3H9v1.5H7.5v-3h2v.5H11V9H6v6h3v5z");
}
</style><path class="y4wcp7b2z"/>`,
		"fallback": "material-symbols:closed-caption-display-sharp",
	});
}

export default Component;
