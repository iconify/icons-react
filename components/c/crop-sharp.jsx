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
		"content": `<style>.dggag-y5q {
  fill: currentColor;
  d: path("M17.5 22.5v-4h-12v-12h-4v-1h4v-4h1v16h16v1h-4v4zm0-6v-10h-10v-1h11v11z");
}
</style><path class="dggag-y5q"/>`,
		"fallback": "material-symbols-light:crop-sharp",
	});
}

export default Component;
