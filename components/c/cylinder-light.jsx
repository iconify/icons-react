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
		"content": `<style>.z-p-lk8ue {
  fill: currentColor;
  d: path("M128 18c-39.25 0-70 18.45-70 42v136c0 23.55 30.75 42 70 42s70-18.45 70-42V60c0-23.55-30.75-42-70-42m0 12c31.44 0 58 13.74 58 30s-26.56 30-58 30s-58-13.74-58-30s26.56-30 58-30m0 196c-31.44 0-58-13.74-58-30V83.81C82.48 94.87 103.59 102 128 102s45.52-7.13 58-18.19V196c0 16.26-26.56 30-58 30");
}
</style><path class="z-p-lk8ue"/>`,
		"fallback": "ph:cylinder-light",
	});
}

export default Component;
