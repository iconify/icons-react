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
		"content": `<style>.t9r25g00r {
  fill: currentColor;
  d: path("M14 16.5a.75.75 0 0 0 .75-.75V4.622l3.957 4.146a.75.75 0 0 0 1.085-1.036l-5.25-5.5a.75.75 0 0 0-1.085 0l-5.25 5.5a.75.75 0 0 0 1.086 1.036l3.957-4.146V15.75c0 .414.336.75.75.75m0 9.5a4 4 0 1 0 0-8a4 4 0 0 0 0 8");
}
</style><path class="t9r25g00r"/>`,
		"fallback": "fluent:arrow-step-out-28-filled",
	});
}

export default Component;
