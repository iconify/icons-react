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
		"content": `<style>.aj2iowbux {
  fill: currentColor;
  d: path("M6.636 2.287A1 1 0 0 0 5 3.059v13.998c0 .927 1.15 1.355 1.756.655l3.524-4.073a1.5 1.5 0 0 1 1.134-.518h5.592c.938 0 1.36-1.176.636-1.772z");
}
</style><path class="aj2iowbux"/>`,
		"fallback": "fluent:cursor-20-filled",
	});
}

export default Component;
