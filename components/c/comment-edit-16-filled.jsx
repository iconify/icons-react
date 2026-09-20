import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rpqmz00bb {
  fill: currentColor;
  d: path("M3.5 2A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.942a.98.98 0 0 0 1.625.738l.387-.339a1.9 1.9 0 0 1 .045-.688l.375-1.498a3.2 3.2 0 0 1 .84-1.485l4.83-4.83A2.87 2.87 0 0 1 15 5.135V4.5A2.5 2.5 0 0 0 12.5 2zm4.48 9.377l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02");
}
</style><path class="rpqmz00bb"/>`,
		"fallback": "fluent:comment-edit-16-filled",
	});
}

export default Component;
