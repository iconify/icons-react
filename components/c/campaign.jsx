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
		"content": `<style>.n1ctzmbmc {
  fill: currentColor;
  d: path("M18 13v-2h4v2zm1.2 7L16 17.6l1.2-1.6l3.2 2.4zm-2-12L16 6.4L19.2 4l1.2 1.6zM5 19v-4H4q-.825 0-1.412-.587T2 13v-2q0-.825.588-1.412T4 9h4l5-3v12l-5-3H7v4zm9-3.65v-6.7q.675.6 1.088 1.463T15.5 12t-.413 1.888T14 15.35");
}
</style><path class="n1ctzmbmc"/>`,
		"fallback": "material-symbols:campaign",
	});
}

export default Component;
