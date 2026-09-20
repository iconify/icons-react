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
		"content": `<style>.hvazs8piy {
  fill: currentColor;
  d: path("M11.617 2.076a1 1 0 0 1 1.09.217l5 5a1 1 0 0 1-.082 1.488L13.6 12l4.024 3.22a1 1 0 0 1 .082 1.487l-5 5A1 1 0 0 1 11 21v-6.92l-3.375 2.7a1 1 0 1 1-1.25-1.56L10.4 12L6.375 8.78a1 1 0 0 1 1.25-1.56L11 9.92V3a1 1 0 0 1 .617-.924M13 14.081v4.505l2.503-2.503zm0-4.162l2.503-2.002L13 5.414z");
}
</style><path class="hvazs8piy"/>`,
		"fallback": "fluent:bluetooth-24-filled",
	});
}

export default Component;
