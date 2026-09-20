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
		"content": `<style>.ij6dnybko {
  fill: currentColor;
  d: path("M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14M38 64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4L118 80L94.53 97.6a2 2 0 0 1-1.2.4H38Zm180 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-90h55.33a14 14 0 0 0 8.4-2.8L130 86h86a2 2 0 0 1 2 2Zm-60-48a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6");
}
</style><path class="ij6dnybko"/>`,
		"fallback": "ph:folder-notch-plus-light",
	});
}

export default Component;
