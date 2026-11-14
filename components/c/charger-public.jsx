import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rm693mbyg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.5 1.75h-3q-1.76 0-3.005 1.245T3.25 6v12q0 1.76 1.245 3.005T7.5 22.25h3q1.76 0 3.005-1.245T14.75 18V8.75H16q1.75 0 1.75 1.75v3.778q-2 .236-2 2.472q0 1.036.732 1.768t1.768.732h.5q1.036 0 1.768-.732t.732-1.768q0-2.236-2-2.472V10.5q0-3.25-3.25-3.25h-1.25V6q0-1.76-1.245-3.005T10.5 1.75m-1.75 3h.5q2.5 0 2.5 2.5v.5q0 1.036-.732 1.768t-1.768.732h-.5q-2.5 0-2.5-2.5v-.5q0-2.5 2.5-2.5");
}
</style><path class="rm693mbyg"/>`,
		"fallback": "uix-solid:charger-public",
	});
}

export default Component;
