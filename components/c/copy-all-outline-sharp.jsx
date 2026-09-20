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
		"content": `<style>.ntbmhzmyu {
  fill: currentColor;
  d: path("M4 17.423v-1.23h1.23v1.23zm0-3.577v-1.23h1.23v1.23zm0-3.577V9.04h1.23v1.23zM7.577 21v-1.23h1.23V21zm.115-3.692V3H19v14.308zm1-1H18V4H8.692zM11.154 21v-1.23h1.23V21zM4 21v-1.23h1.23V21zm10.73 0v-1.23h1.232V21zM4 6.692v-1.23h1.23v1.23zm9.346 3.462");
}
</style><path class="ntbmhzmyu"/>`,
		"fallback": "material-symbols-light:copy-all-outline-sharp",
	});
}

export default Component;
