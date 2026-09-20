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
		"content": `<style>.l4i1wztjw {
  fill: currentColor;
  d: path("M2 20.192V9.423h1v9.77h15.5v1zm3-3v-11h5.308V3h6.384v3.192H22v11zm6.308-11h4.384V4h-4.384zM6 16.192h15v-9H6zm0-9v9z");
}
</style><path class="l4i1wztjw"/>`,
		"fallback": "material-symbols-light:cases-outline-sharp",
	});
}

export default Component;
