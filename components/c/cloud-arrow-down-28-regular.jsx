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
		"content": `<style>.pa4m48icg {
  fill: currentColor;
  d: path("M14 4.5a5.5 5.5 0 0 0-5.496 5.28a.75.75 0 0 1-.75.72H7.5a4 4 0 0 0 0 8h4.566a7.6 7.6 0 0 0-.05 1.5H7.5a5.5 5.5 0 0 1-.431-10.983a7.001 7.001 0 0 1 13.862 0a5.5 5.5 0 0 1 4.963 6.561a7.5 7.5 0 0 0-1.444-1.713A4 4 0 0 0 20.5 10.5h-.255a.75.75 0 0 1-.75-.72A5.5 5.5 0 0 0 14 4.5m12 15a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0v6.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .351.146h.006c.127 0 .254-.05.35-.146l3-3a.5.5 0 0 0-.707-.708L20 22.293z");
}
</style><path class="pa4m48icg"/>`,
		"fallback": "fluent:cloud-arrow-down-28-regular",
	});
}

export default Component;
