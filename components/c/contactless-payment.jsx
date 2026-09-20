import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vgyt6352w {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M97.07 100.26a59.33 59.33 0 0 1 0 55.48a8 8 0 1 1-14.14-7.48a42.79 42.79 0 0 0 0-40.52a8 8 0 0 1 14.14-7.48m56-32a126.67 126.67 0 0 1 0 119.54a8 8 0 0 1-14.07-7.57a110.62 110.62 0 0 0 0-104.46a8 8 0 0 1 14.12-7.54Zm-28 16a93 93 0 0 1 0 87.52a8 8 0 1 1-14.12-7.52a77 77 0 0 0 0-72.48a8 8 0 1 1 14.12-7.52");
}
</style><path class="vgyt6352w"/>`,
		"fallback": "ph:contactless-payment",
	});
}

export default Component;
