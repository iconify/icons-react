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
		"content": `<style>.nted08b4e {
  fill: currentColor;
  d: path("M11.5 4a.5.5 0 0 0 .5.5h1.75a.75.75 0 0 1 0 1.5H12a2 2 0 0 1-2-2V2.25a.75.75 0 0 1 1.5 0zm0 8a.5.5 0 0 1 .5-.5h1.75a.75.75 0 0 0 0-1.5H12a2 2 0 0 0-2 2v1.75a.75.75 0 0 0 1.5 0zM4 11.5a.5.5 0 0 1 .5.5v1.75a.75.75 0 0 0 1.5 0V12a2 2 0 0 0-2-2H2.25a.75.75 0 0 0 0 1.5zM4.5 4a.5.5 0 0 1-.5.5H2.25a.75.75 0 0 0 0 1.5H4a2 2 0 0 0 2-2V2.25a.75.75 0 0 0-1.5 0z");
}
</style><path class="nted08b4e"/>`,
		"fallback": "fluent:full-screen-minimize-16-filled",
	});
}

export default Component;
