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
		"content": `<style>.ytfmrxbqi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.107 5.75H7.28q-1.828 0-2.383 1.742l-2.386 7.499q-.385 1.21.364 2.234t2.018 1.025H16.72q1.828.001 2.383-1.742l2.386-7.499q.385-1.21-.364-2.234T19.107 5.75m-8.591 3h4.268q1.194 0 1.863.988q.67.989.226 2.098l-.8 2q-.565 1.414-2.089 1.414H9.716q-1.194 0-1.863-.988q-.67-.989-.226-2.098l.8-2q.565-1.414 2.089-1.414");
}
</style><path class="ytfmrxbqi"/>`,
		"fallback": "uix-solid:doormat",
	});
}

export default Component;
