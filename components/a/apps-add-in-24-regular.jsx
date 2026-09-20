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
		"content": `<style>.jtfwu9bxp {
  fill: currentColor;
  d: path("M10.5 3a2.25 2.25 0 0 1 2.25 2.25v6h6A2.25 2.25 0 0 1 21 13.5v5.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3zm.75 9.75H4.5v6c0 .414.336.75.75.75h5.999zm7.5 0h-6.001v6.75h6.001a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75M10.5 4.5H5.25a.75.75 0 0 0-.75.75v6h6.75v-6a.75.75 0 0 0-.75-.75m7.398-2.493L18 2a.75.75 0 0 1 .743.648l.007.102v2.5h2.5a.75.75 0 0 1 .743.648L22 6a.75.75 0 0 1-.648.743l-.102.007h-2.5v2.5a.75.75 0 0 1-.648.743L18 10a.75.75 0 0 1-.743-.648l-.007-.102v-2.5h-2.5a.75.75 0 0 1-.743-.648L14 6a.75.75 0 0 1 .648-.743l.102-.007h2.5v-2.5a.75.75 0 0 1 .648-.743");
}
</style><path class="jtfwu9bxp"/>`,
		"fallback": "fluent:apps-add-in-24-regular",
	});
}

export default Component;
