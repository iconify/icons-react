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
		"content": `<style>.ktc1i6_4n {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.5 12q0-3.107 2.197-5.303Q8.893 4.5 12 4.5t5.303 2.197T19.5 12t-2.197 5.303Q15.107 19.5 12 19.5t-5.303-2.197Q4.5 15.107 4.5 12");
}
</style><path class="ktc1i6_4n"/>`,
		"fallback": "uix-solid:compass-rose",
	});
}

export default Component;
