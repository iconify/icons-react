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
		"content": `<style>.zitkt7bjc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 3.75H6q-1.76 0-3.005 1.245T1.75 8v8q0 1.76 1.245 3.005T6 20.25h12q1.76 0 3.005-1.245T22.25 16V8q0-1.76-1.245-3.005T18 3.75M8 6.5h8q2.25 0 2.25 2.25v6.5q0 2.25-2.25 2.25H8q-2.25 0-2.25-2.25v-6.5Q5.75 6.5 8 6.5");
}
</style><path class="zitkt7bjc"/>`,
		"fallback": "uix-solid:cell-counter",
	});
}

export default Component;
