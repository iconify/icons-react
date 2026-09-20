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
		"content": `<style>.fs9uqkhnz {
  fill: currentColor;
  d: path("M17 6V3H3v3a.5.5 0 0 0 .5.5h13A.5.5 0 0 0 17 6m-4.554 1l-2.388 4.776a.5.5 0 1 0 .894.448L13.564 7L13 6.5zM10 17.5c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5s-1 .672-1 1.5s.448 1.5 1 1.5");
}
</style><path class="fs9uqkhnz"/>`,
		"fallback": "fluent:inking-tool-accent-20-filled",
	});
}

export default Component;
