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
		"content": `<style>.sy0oienwz {
  fill: currentColor;
  d: path("M4.654 2a1.8 1.8 0 0 1 1.613-1H10.9A3.1 3.1 0 0 1 14 4.1v7.367a1.8 1.8 0 0 1-1 1.613V4.1A2.1 2.1 0 0 0 10.9 2zM4.8 3A1.8 1.8 0 0 0 3 4.8v9.7a.5.5 0 0 0 .724.446L7.5 13.06l3.777 1.887A.5.5 0 0 0 12 14.5V4.8A1.8 1.8 0 0 0 10.2 3zM4 4.8a.8.8 0 0 1 .8-.8h5.4a.8.8 0 0 1 .8.8v8.89l-3.276-1.637a.5.5 0 0 0-.448 0L4 13.69z");
}
</style><path class="sy0oienwz"/>`,
		"fallback": "fluent:bookmark-multiple-16-regular",
	});
}

export default Component;
