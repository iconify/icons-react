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
		"content": `<style>.bb6rxtd4x {
  fill: currentColor;
  d: path("M17.077 19v-2.923h-2.923v-1h2.923v-2.923h1v2.923H21v1h-2.923V19zm-6.462-2.923H7.078q-1.692 0-2.884-1.192T3 12t1.193-2.885t2.884-1.193h3.539v1H7.077q-1.27 0-2.173.904Q4 10.731 4 12t.904 2.173t2.173.904h3.539zM8.5 12.5v-1h7v1zM21 12h-1q0-1.27-.904-2.173q-.904-.904-2.173-.904h-3.538v-1h3.538q1.692 0 2.885 1.193T21 12");
}
</style><path class="bb6rxtd4x"/>`,
		"fallback": "material-symbols-light:add-link-outline-sharp",
	});
}

export default Component;
