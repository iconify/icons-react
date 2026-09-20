import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jh-ttrq9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.4 21.268l-3.522.022l-.015 9.103l3.053.011M11.2 16.13l-.011 3.313l9.242-.048l-.001-3.339M32.792 43.5a12.813 12.813 0 0 0 .836-17.774a12.8 12.8 0 0 0 3.15-8.413c0-7.076-5.737-12.813-12.813-12.813a12.813 12.813 0 0 0-12.77 11.761m9.214-.059a4.05 4.05 0 0 1 7.97 1.02a4.046 4.046 0 0 1-3.986 4.044m-.534 9.136a4.05 4.05 0 0 1 2.877 6.494l6.056 6.604");
}
</style><path class="jh-ttrq9p"/>`,
		"fallback": "arcticons:h3",
	});
}

export default Component;
