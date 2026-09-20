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
		"content": `<style>.c9n59bbam {
  fill: currentColor;
  d: path("M14 5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m1 4.5V5.83c-.313.11-.65.17-1 .17v3.5a1.5 1.5 0 0 1-1.5 1.5H8.312L5 13.898V11H3.5A1.5 1.5 0 0 1 2 9.5v-5A1.5 1.5 0 0 1 3.5 3H11c0-.35.06-.687.17-1H3.5A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.942a.98.98 0 0 0 1.625.738L8.688 12H12.5A2.5 2.5 0 0 0 15 9.5");
}
</style><path class="c9n59bbam"/>`,
		"fallback": "fluent:comment-badge-16-regular",
	});
}

export default Component;
