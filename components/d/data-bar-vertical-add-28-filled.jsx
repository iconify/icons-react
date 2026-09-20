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
		"content": `<style>.jl68b6t8y {
  fill: currentColor;
  d: path("M20.5 14a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13M6 13a3 3 0 0 1 3 3v6a3 3 0 1 1-6 0v-6a3 3 0 0 1 3-3m8-5a3 3 0 0 1 3 3v2.866a7.498 7.498 0 0 0-2.527 11.097A3 3 0 0 1 11 22V11a3 3 0 0 1 3-3m6.5 8a.5.5 0 0 0-.5.5V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5a.5.5 0 0 0-.5-.5M22 3a3 3 0 0 1 3 3v8.5a7.53 7.53 0 0 0-6-1.35V6a3 3 0 0 1 3-3");
}
</style><path class="jl68b6t8y"/>`,
		"fallback": "fluent:data-bar-vertical-add-28-filled",
	});
}

export default Component;
