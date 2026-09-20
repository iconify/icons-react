import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e6me14bnr {
  fill: currentColor;
  d: path("M6 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm0 1h6v2H6zm2 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1 1.75a1 1 0 1 0 0 2a1 1 0 0 0 0-2M11 10a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1 1.75a1 1 0 1 0 0 2a1 1 0 0 0 0-2M5 10a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1 1.75a1 1 0 1 0 0 2a1 1 0 0 0 0-2M5.5 2A2.5 2.5 0 0 0 3 4.5v9A2.5 2.5 0 0 0 5.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 12.5 2zM4 4.5A1.5 1.5 0 0 1 5.5 3h7A1.5 1.5 0 0 1 14 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 13.5zM7.5 18a2.5 2.5 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-9c.607.456 1 1.182 1 2v7a4.5 4.5 0 0 1-4.5 4.5z");
}
</style><path class="e6me14bnr"/>`,
		"fallback": "fluent:calculator-multiple-20-regular",
	});
}

export default Component;
