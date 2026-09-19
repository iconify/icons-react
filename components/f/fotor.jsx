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
		"content": `<style>.wk62geb3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5v43M34.75 5.38l-21.5 37.24m29.37-29.37L5.38 34.75M45.5 24h-43m40.12 10.75L5.38 13.25m29.37 29.37L13.25 5.38");
}
</style><path class="wk62geb3p"/>`,
		"fallback": "arcticons:fotor",
	});
}

export default Component;
