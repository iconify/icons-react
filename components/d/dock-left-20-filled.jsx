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
		"content": `<style>.xq2qjlr5h {
  d: path("M16 4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1H8v10h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="xq2qjlr5h"/>`,
		"fallback": "fluent:dock-left-20-filled",
	});
}

export default Component;
