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
		"content": `<style>.kg-12zr7p {
  fill: currentColor;
  d: path("M18 13v-2h4v2zm1.2 7L16 17.6l1.2-1.6l3.2 2.4zm-2-12L16 6.4L19.2 4l1.2 1.6zM5 19v-4H2V9h6l5-3v12l-5-3H7v4zm9-3.65v-6.7q.675.6 1.088 1.463T15.5 12t-.413 1.888T14 15.35");
}
</style><path class="kg-12zr7p"/>`,
		"fallback": "material-symbols:campaign-sharp",
	});
}

export default Component;
