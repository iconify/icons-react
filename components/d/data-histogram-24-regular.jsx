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
		"content": `<style>.nzve5dbha {
  fill: currentColor;
  d: path("M13.25 3a2.25 2.25 0 0 1 2.25 2.25V7h3.25A2.25 2.25 0 0 1 21 9.25v11a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-8A2.25 2.25 0 0 1 5.25 10H8.5V5.25A2.25 2.25 0 0 1 10.75 3zm-8 8.5a.75.75 0 0 0-.75.75v7.25h4v-8zm5.5-7a.75.75 0 0 0-.75.75V19.5h4V5.25a.75.75 0 0 0-.75-.75zm4.75 15h4V9.25a.75.75 0 0 0-.75-.75H15.5z");
}
</style><path class="nzve5dbha"/>`,
		"fallback": "fluent:data-histogram-24-regular",
	});
}

export default Component;
