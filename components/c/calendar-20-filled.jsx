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
		"content": `<style>.kdn6kso_q {
  fill: currentColor;
  d: path("M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3zM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5zm-9 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0");
}
</style><path class="kdn6kso_q"/>`,
		"fallback": "fluent:calendar-20-filled",
	});
}

export default Component;
