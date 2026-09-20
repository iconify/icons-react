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
		"content": `<style>.walo6863q {
  fill: currentColor;
  d: path("M7.439 17.577H8.5l1.062-3.011h4.877l1.061 3.011h1.062L12.433 6.192h-.868zm2.453-3.954l2.058-5.796h.1l2.058 5.796zM3 21V3h18v18zm1-1h16V4H4zm0 0V4z");
}
</style><path class="walo6863q"/>`,
		"fallback": "material-symbols-light:font-download-outline-sharp",
	});
}

export default Component;
