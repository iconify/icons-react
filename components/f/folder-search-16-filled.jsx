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
		"content": `<style>.e6z44gzyx {
  fill: currentColor;
  d: path("M3.5 2A2.5 2.5 0 0 0 1 4.5V6h4.586a.5.5 0 0 0 .353-.146L8 3.793L6.646 2.439A1.5 1.5 0 0 0 5.586 2zM1 11.5V7h4.586a1.5 1.5 0 0 0 1.06-.44L9.207 4H12.5A2.5 2.5 0 0 1 15 6.5V10h-.027a4.5 4.5 0 1 0-7.302 4H3.5A2.5 2.5 0 0 1 1 11.5m9.5 2.5c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 10.5 14m0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5");
}
</style><path class="e6z44gzyx"/>`,
		"fallback": "fluent:folder-search-16-filled",
	});
}

export default Component;
