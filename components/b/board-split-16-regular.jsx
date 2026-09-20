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
		"content": `<style>.ag6gag7km {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM4.5 3A1.5 1.5 0 0 0 3 4.5V7h6V3zM3 8v3.5A1.5 1.5 0 0 0 4.5 13H9V8zm7 1h3V7h-3zm3 1h-3v3h1.5a1.5 1.5 0 0 0 1.5-1.5zm0-5.5A1.5 1.5 0 0 0 11.5 3H10v3h3z");
}
</style><path class="ag6gag7km"/>`,
		"fallback": "fluent:board-split-16-regular",
	});
}

export default Component;
