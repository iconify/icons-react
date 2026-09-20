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
		"content": `<style>.nuopzfogy {
  fill: currentColor;
  d: path("M7 7a.75.75 0 1 1-1.5 0A.75.75 0 0 1 7 7m2.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2-7a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3");
}
</style><path class="nuopzfogy"/>`,
		"fallback": "fluent:emoji-meh-16-regular",
	});
}

export default Component;
