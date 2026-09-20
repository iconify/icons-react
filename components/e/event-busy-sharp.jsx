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
		"content": `<style>.e3gep2bnj {
  fill: currentColor;
  d: path("m9.7 17.758l-.708-.708l2.3-2.3l-2.3-2.3l.708-.708l2.3 2.3l2.3-2.3l.708.708l-2.3 2.3l2.3 2.3l-.708.708l-2.3-2.3zM4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zm1-1h14v-9.384H5z");
}
</style><path class="e3gep2bnj"/>`,
		"fallback": "material-symbols-light:event-busy-sharp",
	});
}

export default Component;
