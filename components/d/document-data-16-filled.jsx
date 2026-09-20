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
		"content": `<style>.nt5fpo46x {
  fill: currentColor;
  d: path("M9.5 5h3.25L9 1.25V4.5a.5.5 0 0 0 .5.5m0 1A1.5 1.5 0 0 1 8 4.5V1H4.5A1.5 1.5 0 0 0 3 2.5v11A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V6zM6 12.5a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 1 0zm2.5 0a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0zm2.5 0a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0z");
}
</style><path class="nt5fpo46x"/>`,
		"fallback": "fluent:document-data-16-filled",
	});
}

export default Component;
