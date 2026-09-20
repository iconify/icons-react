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
		"content": `<style>.quy6y6bas {
  fill: currentColor;
  d: path("M6.5 2A4.5 4.5 0 0 0 2 6.5V7h24v-.5A4.5 4.5 0 0 0 21.5 2zM2 21.5V9h24v12.5a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 2 21.5m26-12V5.757c1.206.808 2 2.183 2 3.743V22a8 8 0 0 1-8 8H9.5a4.5 4.5 0 0 1-3.742-2H22a6 6 0 0 0 6-6z");
}
</style><path class="quy6y6bas"/>`,
		"fallback": "fluent:calendar-multiple-32-filled",
	});
}

export default Component;
