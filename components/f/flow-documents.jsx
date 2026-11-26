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
		"content": `<style>.k5-g7p_7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 9L19 9C20.6569 9 22 10.3431 22 12L22 14.8038C22 15.3561 21.5523 15.8038 21 15.8038C20.8245 15.8038 20.652 15.7576 20.5 15.6699C19.7399 15.231 18.8777 15 18 15C16.4262 15 14.9443 15.741 14 17C13.0557 18.259 11.5738 19 10 19C8.565 19 7.1992 18.3834 6.25 17.3072C6.0889 17.1245 6 16.8893 6 16.6458L6 12C6 10.3431 7.3431 9 9 9ZM2 12L2 8C2 6.3431 3.3431 5 5 5L15 5");
}
</style><path class="k5-g7p_7v"/>`,
		"fallback": "keyline-icons:flow-documents",
	});
}

export default Component;
