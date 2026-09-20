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
		"content": `<style>.zq8359xae {
  fill: currentColor;
  d: path("M5.4 17.604c.33.437.957.526 1.399.2l1.213-.896q.015-.127.046-.255l.375-1.498a3.2 3.2 0 0 1 .84-1.485l4.83-4.83A2.87 2.87 0 0 1 18 8.69V5.566C18 4.149 16.836 3 15.4 3H4.6C3.164 3 2 4.149 2 5.566v6.71c0 1.418 1.164 2.566 2.6 2.566h.6v2.171c0 .213.07.42.2.591m9.407-8.058l-4.83 4.83a2.2 2.2 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.079l1.498-.375a2.2 2.2 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 1 0-2.645-2.644");
}
</style><path class="zq8359xae"/>`,
		"fallback": "fluent:comment-edit-20-filled",
	});
}

export default Component;
