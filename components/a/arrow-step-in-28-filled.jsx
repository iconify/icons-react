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
		"content": `<style>.e36mietmp {
  fill: currentColor;
  d: path("M14 2a.75.75 0 0 1 .75.75v11.128l3.957-4.146a.75.75 0 1 1 1.085 1.036l-5.25 5.5a.75.75 0 0 1-1.085 0l-5.25-5.5a.75.75 0 0 1 1.086-1.036l3.957 4.146V2.75A.75.75 0 0 1 14 2m0 24a4 4 0 1 0 0-8a4 4 0 0 0 0 8");
}
</style><path class="e36mietmp"/>`,
		"fallback": "fluent:arrow-step-in-28-filled",
	});
}

export default Component;
