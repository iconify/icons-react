import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n_8_l4huj {
  fill: currentColor;
  d: path("M11.058 17q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h1.865q.213 0 .356.144t.144.357t-.144.356t-.356.143zm-3.75-4.5q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h9.365q.213 0 .356.144t.144.357t-.144.356t-.356.143zM4.5 8q-.213 0-.356-.144T4 7.499t.144-.356T4.5 7h15q.213 0 .356.144t.144.357t-.144.356T19.5 8z");
}
</style><path class="n_8_l4huj"/>`,
		"fallback": "material-symbols-light:filter-list-rounded",
	});
}

export default Component;
