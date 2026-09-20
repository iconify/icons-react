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
		"content": `<style>.vqyg5gbks {
  fill: currentColor;
  d: path("M9.462 19v-2.98H5l7-7.5l7 7.5h-4.462V19zm1-.98h3.076v-3h3.146l-4.684-5l-4.684 5h3.146zM5 11.27l7-7.5l7 7.5h-1.367L12 5.25l-5.633 6.02zm7 3.75");
}
</style><path class="vqyg5gbks"/>`,
		"fallback": "material-symbols-light:arrow-shape-up-stack-outline",
	});
}

export default Component;
