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
		"content": `<style>.zthq_hbvd {
  fill: currentColor;
  d: path("M7.885 21V4.48h2.423V3h3.384v1.48h2.424V21zm3.615-7.23h1v-5h-1zm.5 2.922q.31 0 .52-.21t.21-.52t-.21-.52t-.52-.211t-.52.21t-.21.52t.21.52t.52.211");
}
</style><path class="zthq_hbvd"/>`,
		"fallback": "material-symbols-light:battery-alert-sharp",
	});
}

export default Component;
