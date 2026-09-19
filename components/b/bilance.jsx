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
		"content": `<style>.a0aev7l-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.701 42.5c4.916 0 9.305-3.594 9.772-8.487a9.413 9.413 0 0 0-9.367-10.336a9.09 9.09 0 0 0 9.045-9.981c-.45-4.726-4.69-8.196-9.436-8.196H13.84a4.357 4.357 0 0 0-4.356 4.357v28.286A4.357 4.357 0 0 0 13.84 42.5z");
}
</style><path class="a0aev7l-l"/>`,
		"fallback": "arcticons:bilance",
	});
}

export default Component;
