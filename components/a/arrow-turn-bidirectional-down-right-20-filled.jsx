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
		"content": `<style>.a3mpkvpjo {
  fill: currentColor;
  d: path("M13.78 2.22a.75.75 0 1 0-1.06 1.06L15.44 6H9a3 3 0 0 0-3 3v6.44l-2.72-2.72a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06L7.5 15.44V9A1.5 1.5 0 0 1 9 7.5h6.44l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06z");
}
</style><path class="a3mpkvpjo"/>`,
		"fallback": "fluent:arrow-turn-bidirectional-down-right-20-filled",
	});
}

export default Component;
