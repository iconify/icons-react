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
		"content": `<style>.zrqp7bcpo {
  fill: currentColor;
  d: path("M4 15h16v-2.423H4zm5.077 5.27V16H3V3h18v13h-6.077v4.27L12 18.807zM4 10.422h16V4H4zM4 15V4z");
}
</style><path class="zrqp7bcpo"/>`,
		"fallback": "material-symbols-light:card-membership-outline-sharp",
	});
}

export default Component;
