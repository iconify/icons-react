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
		"content": `<style>.altfxsb0f {
  fill: currentColor;
  d: path("M4 16.423h16v-5.77H4zm13.822-2.178q.294-.293.294-.707t-.294-.706q-.293-.294-.706-.294q-.414 0-.707.294t-.293.706t.293.707t.707.293t.706-.293M21 9.654h-1.402l-2.423-2.5H6.825l-2.423 2.5H3l3.404-3.5h11.192zM3 17.423v-7.77h18v7.77z");
}
</style><path class="altfxsb0f"/>`,
		"fallback": "material-symbols-light:hard-drive-outline-sharp",
	});
}

export default Component;
