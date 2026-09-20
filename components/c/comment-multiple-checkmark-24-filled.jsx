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
		"content": `<style>.exwh3db6k {
  fill: currentColor;
  d: path("M5.25 5a4 4 0 0 0-.244.007A3.25 3.25 0 0 1 7.75 3.5h8a5.75 5.75 0 0 1 5.75 5.75v3.126a6.5 6.5 0 0 0-1.5-.878V9.25A4.25 4.25 0 0 0 15.75 5zm12.25 6q.776.002 1.5.174V9.25A3.25 3.25 0 0 0 15.75 6H5.25A3.25 3.25 0 0 0 2 9.25v6.5a3.25 3.25 0 0 0 3 3.24v1.762a1.25 1.25 0 0 0 1.99 1.008L10.748 19h.426a6.5 6.5 0 0 1 6.326-8m5.5 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708");
}
</style><path class="exwh3db6k"/>`,
		"fallback": "fluent:comment-multiple-checkmark-24-filled",
	});
}

export default Component;
