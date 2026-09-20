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
		"content": `<style>.p1aqiwbro {
  fill: currentColor;
  d: path("M3 21V5h5.616L12 1.615L15.385 5H21v16zm1-1h16V6H4zm2.385-2.384V8.385h11.23v9.23zm1-1h9.23V9.385h-9.23zM12 13");
}
</style><path class="p1aqiwbro"/>`,
		"fallback": "material-symbols-light:filter-frames-outline-sharp",
	});
}

export default Component;
