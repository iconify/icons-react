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
		"content": `<style>.e2-ieelhu {
  fill: currentColor;
  d: path("M12 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0M10 2a.5.5 0 0 1 .5.5v7.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L9.5 10.293V2.5A.5.5 0 0 1 10 2");
}
</style><path class="e2-ieelhu"/>`,
		"fallback": "fluent:arrow-step-in-20-filled",
	});
}

export default Component;
