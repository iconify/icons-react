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
		"content": `<style>.hw-37lbfr {
  fill: currentColor;
  d: path("M10.95 20.039L8.112 17.2l.713-.688l2.125 2.125l4.225-4.25l.713.713zM7.523 7.768l.646 1.77h7.662l.646-1.77zm-.092 2.77l-.97-2.77H4V4h16v3.77h-2.461l-1.074 2.769z");
}
</style><path class="hw-37lbfr"/>`,
		"fallback": "material-symbols-light:detector-status-sharp",
	});
}

export default Component;
