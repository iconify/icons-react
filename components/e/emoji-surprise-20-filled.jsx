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
		"content": `<style>.ayz78bboa {
  fill: currentColor;
  d: path("M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m5.5-.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4.25 3a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 0 0 3.5 0m.75-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="ayz78bboa"/>`,
		"fallback": "fluent:emoji-surprise-20-filled",
	});
}

export default Component;
