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
		"content": `<style>.wb-4_w0uk {
  fill: currentColor;
  d: path("M10.5 5a3 3 0 0 1 6 0v2l1.32 1.119a.5.5 0 0 1-.324.881H9.503a.5.5 0 0 1-.323-.881L10.5 7zm3 6a1.5 1.5 0 0 1-1.415-1h2.829a1.5 1.5 0 0 1-1.415 1m-4-4.463l-.967.819C7.468 8.259 8.106 10 9.503 10h1.52l.119.334A2.5 2.5 0 0 0 14 11.95V15a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.5z");
}
</style><path class="wb-4_w0uk"/>`,
		"fallback": "fluent:dual-screen-closed-alert-20-filled",
	});
}

export default Component;
