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
		"content": `<style>.wmpmpdbtd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m7.442 4.302l4.926 2.016q1.094.448 1.037 1.629t-1.189 1.521l-1.693.507q-.461.139-.639.587l-.688 1.717q-.455 1.136-1.678 1.116t-1.643-1.168L4.146 7.47q-.556-1.529.617-2.656t2.679-.512m6.876 10.016Q13 15.636 13 17.5t1.318 3.182T17.5 22t3.182-1.318T22 17.5t-1.318-3.182T17.5 13t-3.182 1.318");
}
</style><path class="wmpmpdbtd"/>`,
		"fallback": "uix-solid:cursor-not-allowed",
	});
}

export default Component;
