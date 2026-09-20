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
		"content": `<style>.dvrqiccot {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm6.539-4.288h.884V9.327h-.884zm-5.154 0h3.769v-2.539h-.885v1.654h-2v-3.615h2.885v-.885h-3.77zm7.538 0h.885v-2.154h1.923v-.885h-1.923v-1.461h2.923v-.885h-3.808zM5 19V5z");
}
</style><path class="dvrqiccot"/>`,
		"fallback": "material-symbols-light:gif-box-outline-sharp",
	});
}

export default Component;
