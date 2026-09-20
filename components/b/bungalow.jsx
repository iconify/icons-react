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
		"content": `<style>.pakf59b3a {
  fill: currentColor;
  d: path("M7 21v-6.2l-1.1 1.75l-1.7-1.05L12 3l7.8 12.5l-1.7 1.05L17 14.8V21h-4v-5h-2v5zm4-7h2v-2h-2z");
}
</style><path class="pakf59b3a"/>`,
		"fallback": "material-symbols:bungalow",
	});
}

export default Component;
