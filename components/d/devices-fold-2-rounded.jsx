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
		"content": `<style>.c-t6p0t5r {
  fill: currentColor;
  d: path("M17 21H7q-.825 0-1.412-.587T5 19V5q0-.825.588-1.412T7 3h10.6q.625 0 1.125.338t.725.912l2.4 6q.4 1-.187 1.875T20 13h-1v6q0 .825-.587 1.413T17 21m0-2v-6H9.4q-.625 0-1.125-.337t-.725-.913L7 10.375V19z");
}
</style><path class="c-t6p0t5r"/>`,
		"fallback": "material-symbols:devices-fold-2-rounded",
	});
}

export default Component;
