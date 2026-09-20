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
		"content": `<style>.dis_p2c3i {
  fill: currentColor;
  d: path("M6.385 14.692h3.884V9.308H6.385v3.077h3v1.423h-3zm.884-3.076v-1.539h2.116v1.539zm4.25 3.076h.885v-2.365l2.288 2.365h1.212l-2.635-2.73l2.635-2.654H14.73l-2.327 2.327V9.308h-.885zm5.212-.807h.769v-1.5H19v-.77h-1.5v-1.5h-.77v1.5h-1.5v.77h1.5zM4 20V4h16v16z");
}
</style><path class="dis_p2c3i"/>`,
		"fallback": "material-symbols-light:9k-plus-sharp",
	});
}

export default Component;
