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
		"content": `<style>.ekjmdtzjx {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h3.998v-3.998H5zm4.998 0h4.004v-3.998H9.998zm5.004 0H19v-3.998h-3.998zM5 14.002h3.998V9.998H5zm4.998 0h4.004V9.998H9.998zm5.004 0H19V9.998h-3.998zM5 8.998h3.998V5H5zm4.998 0h4.004V5H9.998zm5.004 0H19V5h-3.998z");
}
</style><path class="ekjmdtzjx"/>`,
		"fallback": "material-symbols-light:grid-on-outline-sharp",
	});
}

export default Component;
