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
		"content": `<style>.lfl2usbhg {
  fill: currentColor;
  d: path("M11.612 20.043q-.178-.102-.308-.314l-3.871-6.954q-.112-.192-.158-.385q-.046-.192-.046-.41t.046-.4t.158-.374l3.87-6.935q.132-.212.309-.314T12 3.854t.389.103q.177.102.307.314l3.871 6.935q.112.192.158.375t.046.4t-.046.41t-.158.384l-3.87 6.954q-.131.212-.308.314t-.389.103t-.388-.103M12 18.966l3.848-6.985L12 5.035L8.152 11.98zM12 12");
}
</style><path class="lfl2usbhg"/>`,
		"fallback": "material-symbols-light:hov-outline-rounded",
	});
}

export default Component;
