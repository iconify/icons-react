import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kfou37bdk {
  fill: currentColor;
  d: path("M19.75 25H8.25a.75.75 0 0 1-.102-1.493l.102-.007H10v-2.498H4.25A2.25 2.25 0 0 1 2 18.752V5.25A2.25 2.25 0 0 1 4.25 3h19.499a2.25 2.25 0 0 1 2.25 2.25v13.502a2.25 2.25 0 0 1-2.25 2.25h-5.751V23.5h1.752a.75.75 0 0 1 .743.649l.007.101a.75.75 0 0 1-.648.744zH8.25zm-3.252-3.998H11.5V23.5h4.999zM23.748 4.5H4.25a.75.75 0 0 0-.75.75v13.502c0 .415.336.75.75.75l12.999-.002l.028.002h6.472a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75");
}
</style><path class="kfou37bdk"/>`,
		"fallback": "fluent:desktop-28-regular",
	});
}

export default Component;
