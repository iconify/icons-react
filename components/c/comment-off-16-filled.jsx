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
		"content": `<style>.k7dfsibcb {
  fill: currentColor;
  d: path("m11.293 12l2.853 2.854a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l.739.738A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.942a.98.98 0 0 0 1.625.738L8.688 12zM15 9.5c0 .916-.492 1.716-1.227 2.152L4.121 2H12.5A2.5 2.5 0 0 1 15 4.5z");
}
</style><path class="k7dfsibcb"/>`,
		"fallback": "fluent:comment-off-16-filled",
	});
}

export default Component;
