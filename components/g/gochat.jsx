import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j5k5g5bxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.528 38.806c2.715 1.5 3.797 1.616 7.226 1.616c5.111 0 9.255-4.15 9.255-9.27V26.66m4.204-2.031a9.24 9.24 0 0 0 5.033 1.49c5.11 0 9.254-4.15 9.254-9.27h0c0-5.12-4.143-9.27-9.254-9.27s-9.255 4.15-9.246 9.27s-4.135 9.27-9.246 9.27s-9.254-4.15-9.254-9.27s4.143-9.27 9.254-9.27a9.22 9.22 0 0 1 6.783 2.964");
}
</style><path class="j5k5g5bxq"/>`,
		"fallback": "arcticons:gochat",
	});
}

export default Component;
