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
		"content": `<style>.u49m4k_ht {
  fill: currentColor;
  d: path("M3.22 9.28a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06L8.5 6.56V13a1.5 1.5 0 0 0 1.5 1.5h6.25a.75.75 0 0 1 0 1.5H10a3 3 0 0 1-3-3V6.56L4.28 9.28a.75.75 0 0 1-1.06 0");
}
</style><path class="u49m4k_ht"/>`,
		"fallback": "fluent:arrow-turn-left-up-20-filled",
	});
}

export default Component;
