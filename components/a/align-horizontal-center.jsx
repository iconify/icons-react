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
		"content": `<style>.k7hptl2mh {
  fill: currentColor;
  d: path("M11.5 21v-4.692H7v-2.039h4.5V9.731H4V7.692h7.5V3h1v4.692H20v2.039h-7.5v4.538H17v2.039h-4.5V21z");
}
</style><path class="k7hptl2mh"/>`,
		"fallback": "material-symbols-light:align-horizontal-center",
	});
}

export default Component;
