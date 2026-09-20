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
		"content": `<style>.gtuagy03y {
  fill: currentColor;
  d: path("M4.5 5q-.213 0-.356-.144T4 4.499t.144-.356T4.5 4h15q.213 0 .356.144t.144.357t-.144.356T19.5 5zm6 3.75q-.213 0-.356-.144T10 8.249t.144-.356t.356-.143h9q.213 0 .356.144t.144.357t-.144.356t-.356.143zm-6 3.75q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm6 3.75q-.213 0-.356-.144T10 15.749t.144-.356t.356-.143h9q.213 0 .356.144t.144.357t-.144.356t-.356.143zM4.5 20q-.213 0-.356-.144T4 19.499t.144-.356T4.5 19h15q.213 0 .356.144t.144.357t-.144.356T19.5 20z");
}
</style><path class="gtuagy03y"/>`,
		"fallback": "material-symbols-light:format-align-right-rounded",
	});
}

export default Component;
