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
		"content": `<style>.ss0tn1tgd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.179 5.844l6.008 10.68q.703 1.25-.021 2.488t-2.158 1.238H5.992q-1.434 0-2.158-1.238t-.021-2.488l6.008-10.68Q10.538 4.57 12 4.57t2.179 1.274");
}
</style><path class="ss0tn1tgd"/>`,
		"fallback": "uix-solid:delta",
	});
}

export default Component;
