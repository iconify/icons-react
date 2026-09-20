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
		"content": `<style>.qbg1vvbpv {
  fill: currentColor;
  d: path("m6 21l1-10.95L5.825 3H8.45q1.475 0 2.588.95t1.362 2.4L12.85 9H18v2h-1.9l.9 10h-2l-.175-2h-6.65L8 21zM8.85 9h1.975l-.4-2.325q-.125-.725-.688-1.2T8.45 5h-.275zm0 0h1.975zm-.5 8h6.275l-.175-2h-5.9zm.375-4h5.55l-.2-2H8.9z");
}
</style><path class="qbg1vvbpv"/>`,
		"fallback": "material-symbols:high-chair-outline-sharp",
	});
}

export default Component;
