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
		"content": `<style>.f508rmb6r {
  fill: currentColor;
  d: path("M1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v5a2.5 2.5 0 0 1-2.5 2.5H8.688l-3.063 2.68A.98.98 0 0 1 4 13.942V12h-.5A2.5 2.5 0 0 1 1 9.5zM7.5 8h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1m-2-1h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1m-2 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm7 1h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1");
}
</style><path class="f508rmb6r"/>`,
		"fallback": "fluent:comment-text-16-filled",
	});
}

export default Component;
