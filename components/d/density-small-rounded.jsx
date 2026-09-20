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
		"content": `<style>.avlo5lbxy {
  fill: currentColor;
  d: path("M4.5 21q-.213 0-.356-.144T4 20.499t.144-.356T4.5 20h15q.213 0 .356.144t.144.357t-.144.356T19.5 21zm0-5.5q-.213 0-.356-.144T4 14.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-6q-.213 0-.356-.144T4 8.999t.144-.356T4.5 8.5h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-5.5q-.213 0-.356-.144T4 3.499t.144-.356T4.5 3h15q.213 0 .356.144t.144.357t-.144.356T19.5 4z");
}
</style><path class="avlo5lbxy"/>`,
		"fallback": "material-symbols-light:density-small-rounded",
	});
}

export default Component;
