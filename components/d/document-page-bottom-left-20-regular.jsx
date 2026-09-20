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
		"content": `<style>.jpjdgebgr {
  fill: currentColor;
  d: path("M10.928 10.556a.5.5 0 1 0-.99-.145l-.086.587h-1.24l.066-.442a.5.5 0 1 0-.99-.145l-.086.587H7a.5.5 0 1 0 0 1h.456l-.22 1.5H6.5a.5.5 0 1 0 0 1h.59l-.137.93a.5.5 0 1 0 .99.144l.157-1.074h1.24l-.137.93a.5.5 0 0 0 .99.144l.157-1.074H11a.5.5 0 0 0 0-1h-.503l.22-1.5h.783a.5.5 0 0 0 0-1h-.637zm-2.681 2.942l.22-1.5h1.239l-.22 1.5zM14 18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2zm0-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1");
}
</style><path class="jpjdgebgr"/>`,
		"fallback": "fluent:document-page-bottom-left-20-regular",
	});
}

export default Component;
