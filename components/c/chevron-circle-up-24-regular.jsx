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
		"content": `<style>.z8mb4fb7j {
  fill: currentColor;
  d: path("M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-1.5a8.5 8.5 0 1 1 0-17a8.5 8.5 0 0 1 0 17m-4.53-6.47a.75.75 0 0 0 1.06 0L12 10.56l3.47 3.47a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06");
}
</style><path class="z8mb4fb7j"/>`,
		"fallback": "fluent:chevron-circle-up-24-regular",
	});
}

export default Component;
