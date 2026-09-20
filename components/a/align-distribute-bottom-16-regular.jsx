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
		"content": `<style>.qezwqj-zr {
  fill: currentColor;
  d: path("M14.5 15a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zm0-7a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM3 3.5A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 3.5v1A1.5 1.5 0 0 1 11.5 6h-7A1.5 1.5 0 0 1 3 4.5zM4.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2 6A1.5 1.5 0 0 0 5 10.5v1A1.5 1.5 0 0 0 6.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 9.5 9zM6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z");
}
</style><path class="qezwqj-zr"/>`,
		"fallback": "fluent:align-distribute-bottom-16-regular",
	});
}

export default Component;
