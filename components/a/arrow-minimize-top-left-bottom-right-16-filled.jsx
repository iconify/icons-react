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
		"content": `<style>.iwx-4eb8w {
  fill: currentColor;
  d: path("M12.75 9a.75.75 0 0 1 0 1.5h-1.19l2.22 2.22a.75.75 0 1 1-1.06 1.06l-2.22-2.22v1.19a.75.75 0 0 1-1.5 0v-2.9q0-.027.002-.052a.748.748 0 0 1 .796-.796L9.85 9zM2.22 2.22a.75.75 0 0 1 1.06 0L5.5 4.44V3.25a.75.75 0 1 1 1.5 0v2.9l-.002.051a.75.75 0 0 1-.797.797L6.151 7H3.25a.75.75 0 0 1 0-1.5h1.19L2.22 3.28a.75.75 0 0 1 0-1.06");
}
</style><path class="iwx-4eb8w"/>`,
		"fallback": "fluent:arrow-minimize-top-left-bottom-right-16-filled",
	});
}

export default Component;
