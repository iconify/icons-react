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
		"content": `<style>.hn8dgd2ky {
  fill: currentColor;
  d: path("M9 9h6l-3-3zm3 9l3-3H9zm8 4H4V2h16zm-2-2V4H6v16zm0-16H6z");
}
</style><path class="hn8dgd2ky"/>`,
		"fallback": "material-symbols:fit-page-height-outline-sharp",
	});
}

export default Component;
