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
		"content": `<style>.avcqmhbux {
  fill: currentColor;
  d: path("M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14M4.538 8.191q.037.088.106.16l.003.003l2.5 2.5a.5.5 0 0 0 .707-.708L6.207 8.5H11a.5.5 0 0 0 0-1H6.207l1.647-1.646a.5.5 0 1 0-.708-.708l-2.5 2.5l-.002.003a.5.5 0 0 0-.106.542");
}
</style><path class="avcqmhbux"/>`,
		"fallback": "fluent:arrow-circle-left-16-filled",
	});
}

export default Component;
