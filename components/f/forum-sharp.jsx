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
		"content": `<style>.iabomcb-c {
  fill: currentColor;
  d: path("M6 18v-3h13V6h3v16l-4-4zm-4-1V2h15v11H6z");
}
</style><path class="iabomcb-c"/>`,
		"fallback": "material-symbols:forum-sharp",
	});
}

export default Component;
