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
		"content": `<style>.dax2lmbqo {
  fill: currentColor;
  d: path("m10.95 9.2l1-2.9h.1l1 2.9zM12 15q-2.5 0-4.25-1.75T6 9t1.75-4.25T12 3t4.25 1.75T18 9t-1.75 4.25T12 15m-3.25-3h1.2l.65-1.8h2.8l.65 1.8h1.2L12.6 5h-1.25zM3 22v-5h2v5zm4 0v-5h2v5zm4 0v-5h2v5zm4 0v-5h6v5z");
}
</style><path class="dax2lmbqo"/>`,
		"fallback": "material-symbols:autofps-select-sharp",
	});
}

export default Component;
