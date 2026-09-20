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
		"content": `<style>.u7p09eb7o {
  fill: currentColor;
  d: path("M6.5 1a1.5 1.5 0 0 0-1.415 1H4.5A1.5 1.5 0 0 0 3 3.5v10A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 11.5 2h-.585A1.5 1.5 0 0 0 9.5 1zM6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M5.5 6h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 5 9m.5 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1");
}
</style><path class="u7p09eb7o"/>`,
		"fallback": "fluent:clipboard-text-ltr-16-filled",
	});
}

export default Component;
