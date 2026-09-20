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
		"content": `<style>.k57rambfd {
  fill: currentColor;
  d: path("M178 40a61.6 61.6 0 0 0-43.84 18.16L128 64.32l-6.16-6.16A62 62 0 0 0 16 102c0 70 103.79 126.67 108.21 129a8 8 0 0 0 7.58 0C136.21 228.67 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46 46 0 0 1 78.53-32.53l6.16 6.16L106.34 86a8 8 0 0 0 0 11.31l24.53 24.53l-16.53 16.52a8 8 0 0 0 11.32 11.32l22.18-22.19a8 8 0 0 0 0-11.31l-24.53-24.55l22.16-22.16A46 46 0 0 1 224 102c0 53.61-77.76 102.15-96 112.8");
}
</style><path class="k57rambfd"/>`,
		"fallback": "ph:heart-break",
	});
}

export default Component;
