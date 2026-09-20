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
		"content": `<style>.g4kt96b9z {
  fill: currentColor;
  d: path("M20.192 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2zm-14.384 2v-3h-4v-6h1v5h3v-5h1v5h1v1h-1v3zm3.769 0v-9h7v1h-6v7h5v-3h-2v-1h3v5z");
}
</style><path class="g4kt96b9z"/>`,
		"fallback": "material-symbols-light:4g-plus-mobiledata-sharp",
	});
}

export default Component;
