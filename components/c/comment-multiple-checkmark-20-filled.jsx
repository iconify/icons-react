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
		"content": `<style>.e6utolrst {
  fill: currentColor;
  d: path("M17 7.5A3.5 3.5 0 0 0 13.5 4h-9c.456-.607 1.182-1 2-1h7A4.5 4.5 0 0 1 18 7.5v2.757a5.5 5.5 0 0 0-1-.657zM9.057 16h.15A5.5 5.5 0 0 1 16 9.207V7.5A2.5 2.5 0 0 0 13.5 5h-9A2.5 2.5 0 0 0 2 7.5v6A2.5 2.5 0 0 0 4.5 16H5v.995a1 1 0 0 0 1.59.808zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708");
}
</style><path class="e6utolrst"/>`,
		"fallback": "fluent:comment-multiple-checkmark-20-filled",
	});
}

export default Component;
