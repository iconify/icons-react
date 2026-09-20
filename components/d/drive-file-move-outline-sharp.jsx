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
		"content": `<style>.sauurvb2h {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12zm1-1h16V8h-8.806l-2-2H4zm0 0V6zm9.392-4.5l-1.913 1.914l.708.707L15.307 13l-3.12-3.121l-.708.708l1.913 1.913h-4.7v1z");
}
</style><path class="sauurvb2h"/>`,
		"fallback": "material-symbols-light:drive-file-move-outline-sharp",
	});
}

export default Component;
