import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p0o2x4u4c {
  fill: currentColor;
  d: path("M8.072 9.444a.5.5 0 1 0 .99.145l.086-.587h1.24l-.066.442a.5.5 0 1 0 .99.145l.086-.587H12a.5.5 0 0 0 0-1h-.456l.22-1.5h.736a.5.5 0 0 0 0-1h-.59l.137-.93a.5.5 0 0 0-.99-.144L10.9 5.502H9.66l.137-.93a.5.5 0 0 0-.99-.144L8.65 5.502H8a.5.5 0 0 0 0 1h.503l-.22 1.5H7.5a.5.5 0 0 0 0 1h.637zm2.681-2.942l-.22 1.5H9.295l.22-1.5zM6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1");
}
</style><path class="p0o2x4u4c"/>`,
		"fallback": "fluent:document-page-top-center-20-regular",
	});
}

export default Component;
