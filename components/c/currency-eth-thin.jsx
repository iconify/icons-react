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
		"content": `<style>.pjuqoelhu {
  fill: currentColor;
  d: path("m219.15 125.53l-88-112a4 4 0 0 0-6.3 0l-88 112a4 4 0 0 0 0 4.94l88 112a4 4 0 0 0 6.3 0l88-112a4 4 0 0 0 0-4.94M132 27.57l77.71 98.9L132 161.79Zm-8 134.22l-77.71-35.32L124 27.57Zm0 8.79v57.85l-70.72-90Zm8 0l70.72-32.15l-70.72 90Z");
}
</style><path class="pjuqoelhu"/>`,
		"fallback": "ph:currency-eth-thin",
	});
}

export default Component;
