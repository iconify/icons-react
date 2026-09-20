import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mfa5smbqu {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-1.164 1.818a1.5 1.5 0 0 0-.275-.379l-.446-.446A1 1 0 0 0 17 13V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5v1H4a2 2 0 0 1-2-2zm8.854 4.147A.5.5 0 0 0 10 10.5v7a.5.5 0 0 0 .91.287l1.571-2.245l2.943.452a.5.5 0 0 0 .43-.848zM11 15.914v-4.207l3.066 3.067l-1.74-.268a.5.5 0 0 0-.486.207z");
}
</style><path class="mfa5smbqu"/>`,
		"fallback": "fluent:cursor-hover-20-regular",
	});
}

export default Component;
