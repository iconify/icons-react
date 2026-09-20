import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.esq6f_bxf {
  fill: currentColor;
  d: path("M8.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM11 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0M8 6v4a2 2 0 1 0 0-4m7 2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m-6.5 5.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM3 8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1A.5.5 0 0 1 3 8m.854-4.853a.5.5 0 0 0-.708.707l1 1a.5.5 0 1 0 .708-.707zm-.708 9.707a.5.5 0 0 0 .708 0l1-1a.5.5 0 1 0-.708-.707l-1 1a.5.5 0 0 0 0 .707m9-9.707a.5.5 0 0 1 .708.707l-1 1a.5.5 0 0 1-.708-.707zm.708 9.707a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.707l1 1a.5.5 0 0 1 0 .707");
}
</style><path class="esq6f_bxf"/>`,
		"fallback": "fluent:brightness-high-16-filled",
	});
}

export default Component;
