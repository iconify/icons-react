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
		"content": `<style>.o4d4-6bgs {
  fill: currentColor;
  d: path("M16.5 3v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V3zm-10 7.5v7l6.447-3.106a1 1 0 0 0 .553-.894v-3z");
}
</style><path class="o4d4-6bgs"/>`,
		"fallback": "fluent:highlight-accent-20-filled",
	});
}

export default Component;
