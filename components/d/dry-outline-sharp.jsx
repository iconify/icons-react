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
		"content": `<style>.z-jdwhbgh {
  fill: currentColor;
  d: path("M14.975 8q.125-1.025-.012-1.612t-.738-1.338q-.775-1-1.037-1.925T13.1 1H15q-.2 1.275.125 1.875t.9 1.4q.65.875.85 1.738T16.9 8zM19 8q.125-1.025-.025-1.612t-.75-1.338q-.775-1-1.025-1.925T17.125 1H19q-.2 1.275.125 1.875t.9 1.4q.65.875.85 1.738T20.9 8zm0 14H2V10.975l9.625-6.25L13.25 6.35L11.3 9.5H20v2H7.7l1.925-3.1L4 12.05V20h15zm-7-7v-2h10v2zm0 3.5v-2h9v2zm-4-3.05");
}
</style><path class="z-jdwhbgh"/>`,
		"fallback": "material-symbols:dry-outline-sharp",
	});
}

export default Component;
