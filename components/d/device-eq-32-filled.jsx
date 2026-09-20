import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jn1k83bkj {
  fill: currentColor;
  d: path("M16 2c.69 0 1.25.56 1.25 1.25v25.5a1.25 1.25 0 1 1-2.5 0V3.25c0-.69.56-1.25 1.25-1.25m-5.75 5c.69 0 1.25.56 1.25 1.25v15.5a1.25 1.25 0 1 1-2.5 0V8.25C9 7.56 9.56 7 10.25 7m11.5 0c.69 0 1.25.56 1.25 1.25v15.5a1.25 1.25 0 1 1-2.5 0V8.25c0-.69.56-1.25 1.25-1.25m-17.5 5c.69 0 1.25.56 1.25 1.25v5.5a1.25 1.25 0 1 1-2.5 0v-5.5c0-.69.56-1.25 1.25-1.25m23.5 0c.69 0 1.25.56 1.25 1.25v5.5a1.25 1.25 0 1 1-2.5 0v-5.5c0-.69.56-1.25 1.25-1.25");
}
</style><path class="jn1k83bkj"/>`,
		"fallback": "fluent:device-eq-32-filled",
	});
}

export default Component;
