import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.scah8wbvz {
  fill: currentColor;
  d: path("M7.069 11.017a7.001 7.001 0 0 1 13.862 0A5.5 5.5 0 0 1 20.5 22h-13a5.5 5.5 0 0 1-.431-10.983M11.75 10a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM6 16.25c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.75.75m9.75-.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="scah8wbvz"/>`,
		"fallback": "fluent:cloud-words-28-filled",
	});
}

export default Component;
