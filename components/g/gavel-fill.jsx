import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k3t8s4rgo {
  fill: currentColor;
  d: path("M52.69 99.31a16 16 0 0 1 0-22.63l64-64a16 16 0 0 1 22.63 22.63l-64 64a16 16 0 0 1-22.63 0m190.63 17.37a16 16 0 0 0-22.63 0l-64 64a16 16 0 0 0 0 22.63a16 16 0 0 0 22.63 0l64-64a16 16 0 0 0 0-22.63m-35.11-15.8l-53.09-53.09a4 4 0 0 0-5.66 0L87.8 109.45a4 4 0 0 0 0 5.66l15.2 15.23l-74.31 74.35a16 16 0 0 0 22.62 22.62L125.66 153l15.23 15.23a4 4 0 0 0 5.66 0l61.66-61.66a4 4 0 0 0 0-5.69");
}
</style><path class="k3t8s4rgo"/>`,
		"fallback": "ph:gavel-fill",
	});
}

export default Component;
