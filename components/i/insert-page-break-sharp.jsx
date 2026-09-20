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
		"content": `<style>.ckfgz8brw {
  fill: currentColor;
  d: path("M4 22v-5h16v5zm9-13h5l-5-5zm-4 6v-2h6v2zm8 0v-2h6v2zM1 15v-2h6v2zm3-4V2h10l6 6v3z");
}
</style><path class="ckfgz8brw"/>`,
		"fallback": "material-symbols:insert-page-break-sharp",
	});
}

export default Component;
