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
		"content": `<style>.cvbuktt6z {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.221l.212-.845q.02-.078.043-.155H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.232c.32-.137.659-.213 1-.229V6a3 3 0 0 0-3-3zm2.854 4.854a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L6.707 10zm3-.708a.5.5 0 0 0-.708.708L13.293 10l-2.147 2.146a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708zm-.874 8.231l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02");
}
</style><path class="cvbuktt6z"/>`,
		"fallback": "fluent:code-block-edit-20-regular",
	});
}

export default Component;
