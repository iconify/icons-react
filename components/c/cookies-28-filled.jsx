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
		"content": `<style>.zwi5gxboc {
  fill: currentColor;
  d: path("M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12q0-.642-.066-1.268a.75.75 0 0 0-1.309-.417a3.5 3.5 0 0 1-6.125-2.262a.75.75 0 0 0-.53-.707a3.502 3.502 0 0 1-1.396-5.869a.75.75 0 0 0-.384-1.278A12.3 12.3 0 0 0 14 2m0 13.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M10.25 19a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M8 12.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M18.25 20a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0");
}
</style><path class="zwi5gxboc"/>`,
		"fallback": "fluent:cookies-28-filled",
	});
}

export default Component;
