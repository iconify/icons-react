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
		"content": `<style>.g-yiwnest {
  fill: currentColor;
  d: path("M14.5 6a.5.5 0 0 1 0 1H14v4.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5V7h-.5a.5.5 0 0 1 0-1zM3 11.5c0 .175.032.344.087.5H5.5V7H3zm7.5.5h2.413q.085-.236.087-.5V7h-2.5zm-4 0h3V7h-3zM9.756 1.013A2.5 2.5 0 0 1 12 3.5V5H4V3.5A2.5 2.5 0 0 1 6.5 1h3z");
}
</style><path class="g-yiwnest"/>`,
		"fallback": "fluent:balcony-16-filled",
	});
}

export default Component;
