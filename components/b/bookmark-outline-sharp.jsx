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
		"content": `<style>.wt4e7hbjq {
  fill: currentColor;
  d: path("M6 19.5V4h12v15.5l-6-2.583zm1-1.55l5-2.15l5 2.15V5H7zM7 5h10z");
}
</style><path class="wt4e7hbjq"/>`,
		"fallback": "material-symbols-light:bookmark-outline-sharp",
	});
}

export default Component;
