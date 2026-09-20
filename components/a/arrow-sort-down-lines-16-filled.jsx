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
		"content": `<style>.d9y3cpbnx {
  fill: currentColor;
  d: path("M13 1.75a.75.75 0 0 0-1.5 0v10.69l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72zM2.75 2.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm2 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM6 9.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 9.25");
}
</style><path class="d9y3cpbnx"/>`,
		"fallback": "fluent:arrow-sort-down-lines-16-filled",
	});
}

export default Component;
