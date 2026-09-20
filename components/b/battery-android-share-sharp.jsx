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
		"content": `<style>.pucpw0bwj {
  fill: currentColor;
  d: path("M1 18V6h17.175l-3 3H11v9zm12-2v-5h6.175L17.6 9.4L19 8l4 4l-4 4l-1.425-1.425l1.6-1.575H15v3z");
}
</style><path class="pucpw0bwj"/>`,
		"fallback": "material-symbols:battery-android-share-sharp",
	});
}

export default Component;
