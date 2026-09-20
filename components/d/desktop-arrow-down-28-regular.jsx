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
		"content": `<style>.qxaoddb3t {
  fill: currentColor;
  d: path("M27 7.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0v6.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .351.146h.006c.127 0 .254-.05.35-.146l3-3a.5.5 0 0 0-.707-.708L21 10.293zm3.499 15.252v-4.906a7.5 7.5 0 0 0 1.5-1.246v6.152a2.25 2.25 0 0 1-2.25 2.25h-5.751V23.5h1.752a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.648.743L19.75 25H8.25a.75.75 0 0 1-.102-1.493l.102-.007H10v-2.498H4.25A2.25 2.25 0 0 1 2 18.752V5.25A2.25 2.25 0 0 1 4.25 3H14.5a7.5 7.5 0 0 0-.876 1.5H4.25a.75.75 0 0 0-.75.75v13.502c0 .414.336.75.75.75l12.999-.002l.028.002h6.472a.75.75 0 0 0 .75-.75m-8.001 2.25H11.5V23.5h4.999z");
}
</style><path class="qxaoddb3t"/>`,
		"fallback": "fluent:desktop-arrow-down-28-regular",
	});
}

export default Component;
