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
		"content": `<style>.r2mt24avt {
  fill: currentColor;
  d: path("M13.923 18.616q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.229t-.54.23t-.23.54q0 .309.23.539t.54.23m2.923 0q.31 0 .54-.23t.23-.54t-.23-.54q-.23-.229-.54-.229t-.54.23t-.229.54t.23.539t.54.23M4 13.5V3h16v10.5h-1V4H5v9.5zm1 1V20h14v-5.5zM4 21v-7.5h16V21zm1-7.5h14zm0 1h14z");
}
</style><path class="r2mt24avt"/>`,
		"fallback": "material-symbols-light:hard-drive-2-outline-sharp",
	});
}

export default Component;
