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
		"content": `<style>.x_a113egi {
  fill: currentColor;
  d: path("M6.77 15.346h5.73v-1.961H6.77zm8.5 0h1.96V8.654h-1.96zm-8.5-4.73h5.73V8.654H6.77zM4 18h16V6H4zm-1 1V5h18v14zm1-1V6z");
}
</style><path class="x_a113egi"/>`,
		"fallback": "material-symbols-light:contextual-token-outline-sharp",
	});
}

export default Component;
