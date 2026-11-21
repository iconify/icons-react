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
		"content": `<style>.quw71x16p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11.0718 22H4.0024C2.5325 22 1.5647 20.4675 2.1965 19.1403L7.4029 8.204C7.4668 8.0697 7.5 7.9228 7.5 7.7741V3C7.5 2.4477 7.9477 2 8.5 2H11.5C12.0523 2 12.5 2.4477 12.5 3V7.7741C12.5 7.9228 12.5332 8.0697 12.5971 8.204L13.9705 11.0889M6 2H14M2.7394 18H10M15.1716 15.1716L20.8284 20.8284M18 14C20.2092 14 22 15.7908 22 18C22 20.2092 20.2092 22 18 22C15.7908 22 14 20.2092 14 18C14 15.7908 15.7908 14 18 14Z");
}
</style><path class="quw71x16p"/>`,
		"fallback": "keyline-icons:flask-conical-ban",
	});
}

export default Component;
