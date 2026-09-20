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
		"content": `<style>.ib8tnqb6q {
  fill: currentColor;
  d: path("M5 7a3 3 0 0 1 6 0a.5.5 0 0 0 .5.5h.25a2.25 2.25 0 0 1 0 4.5h-7.5a2.25 2.25 0 0 1 0-4.5h.25A.5.5 0 0 0 5 7m3-4a4 4 0 0 0-3.97 3.507A3.25 3.25 0 0 0 4.25 13h7.5a3.25 3.25 0 0 0 .22-6.493A4 4 0 0 0 8 3M7 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM4 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5M9.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z");
}
</style><path class="ib8tnqb6q"/>`,
		"fallback": "fluent:cloud-words-16-regular",
	});
}

export default Component;
