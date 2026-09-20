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
		"content": `<style>.zgc1dp08l {
  fill: currentColor;
  d: path("M12 8V2H6a2 2 0 0 0-2 2v7.6a5.5 5.5 0 0 1 7.425 7.35l2.062 2.063c.278.277.443.626.495.987H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5m-7 13a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 6.5 21m0-1.5a3 3 0 1 1 0-6a3 3 0 0 1 0 6");
}
</style><path class="zgc1dp08l"/>`,
		"fallback": "fluent:document-search-24-filled",
	});
}

export default Component;
