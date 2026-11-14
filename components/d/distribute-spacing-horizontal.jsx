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
		"content": `<style>.beoo35x0y {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.25 2.75h-.5q-2.5 0-2.5 2.5v13.5q0 2.5 2.5 2.5h.5q2.5 0 2.5-2.5V5.25q0-2.5-2.5-2.5m-7.5 2.5h.5q2.5 0 2.5 2.5v8.5q0 1.036-.732 1.768t-1.768.732h-.5q-1.036 0-1.768-.732T2.25 16.25v-8.5q0-2.5 2.5-2.5m14 2h.5q1.036 0 1.768.732t.732 1.768v4.5q0 1.036-.732 1.768t-1.768.732h-.5q-2.5 0-2.5-2.5v-4.5q0-2.5 2.5-2.5");
}
</style><path class="beoo35x0y"/>`,
		"fallback": "uix-solid:distribute-spacing-horizontal",
	});
}

export default Component;
