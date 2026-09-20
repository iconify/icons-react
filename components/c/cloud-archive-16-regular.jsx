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
		"content": `<style>.xs76r_b3f {
  fill: currentColor;
  d: path("M8 3a3 3 0 0 0-3 3a.5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5H7v1H4.25a3.25 3.25 0 0 1-.22-6.493a4 4 0 0 1 7.94 0A3.25 3.25 0 0 1 14.49 7h-1.326a2.24 2.24 0 0 0-1.414-.5h-.25A.5.5 0 0 1 11 6a3 3 0 0 0-3-3m0 5a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2zm5 8a2 2 0 0 0 2-2v-3H8v3a2 2 0 0 0 2 2zm-3-3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5");
}
</style><path class="xs76r_b3f"/>`,
		"fallback": "fluent:cloud-archive-16-regular",
	});
}

export default Component;
