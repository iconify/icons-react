import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d_pdv2boj {
  fill: currentColor;
  d: path("M23.866 15.366a1.25 1.25 0 0 0 0 1.768l5.616 5.616H15.25a1.25 1.25 0 1 0 0 2.5h14.232l-5.616 5.616a1.25 1.25 0 0 0 1.768 1.768l7.75-7.75a1.25 1.25 0 0 0 0-1.768l-7.75-7.75a1.25 1.25 0 0 0-1.768 0M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24S33.665 41.5 24 41.5S6.5 33.665 6.5 24");
}
</style><path class="d_pdv2boj"/>`,
		"fallback": "fluent:arrow-circle-right-48-regular",
	});
}

export default Component;
