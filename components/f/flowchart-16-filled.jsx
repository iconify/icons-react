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
		"content": `<style>.xa_hoqbpr {
  fill: currentColor;
  d: path("M3.5 2A1.5 1.5 0 0 0 2 3.5v2A1.5 1.5 0 0 0 3.5 7H4v1.884a1 1 0 0 0-.206.159l-1.751 1.751a1 1 0 0 0 0 1.414l1.751 1.751a1 1 0 0 0 1.414 0l1.751-1.75q.096-.096.16-.209H9v.5a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 12.5 9h-2A1.5 1.5 0 0 0 9 10.5v.5H7.119a1 1 0 0 0-.159-.206L5.21 9.043a1 1 0 0 0-.21-.16V7h.5A1.5 1.5 0 0 0 7 5.5v-2A1.5 1.5 0 0 0 5.5 2z");
}
</style><path class="xa_hoqbpr"/>`,
		"fallback": "fluent:flowchart-16-filled",
	});
}

export default Component;
