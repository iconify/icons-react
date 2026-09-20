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
		"content": `<style>.ejgty7bfu {
  fill: currentColor;
  d: path("M11.039 20q-.31 0-.54-.23t-.23-.54v-6.71h4v6.71q0 .31-.23.54T13.5 20zm-.77-8.5V7H6.931q-.379 0-.592-.312t-.056-.67q.479-.931 1.389-1.475Q8.582 4 9.654 4H13.5q.31 0 .54.23t.23.54v2.115l2.588-2.589q.142-.142.304-.219Q17.325 4 17.51 4h.086q.233 0 .395.143t.163.357v5.77q0 .213-.163.356t-.395.143h-.087q-.184 0-.347-.077t-.304-.219l-2.589-2.589V11.5z");
}
</style><path class="ejgty7bfu"/>`,
		"fallback": "material-symbols-light:hardware-rounded",
	});
}

export default Component;
