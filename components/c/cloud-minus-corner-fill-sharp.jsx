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
		"content": `<style>.tm_3skb5i {
  fill: currentColor;
  d: path("M7 20a6 6 0 0 1-.74-11.955c.742-2.012 2.206-3.704 4.274-4.403c2.856-.964 5.823.266 7.337 2.833c.419.717.721 1.496.896 2.307A.998.998 0 0 1 17.791 10H9v9a1 1 0 0 1-1 1Zm6-5h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="tm_3skb5i"/>`,
		"fallback": "coolicons:cloud-minus-corner-fill-sharp",
	});
}

export default Component;
