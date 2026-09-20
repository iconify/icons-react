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
		"content": `<style>.f7h67unxa {
  fill: currentColor;
  d: path("M7 12.25h10v-2H7zm0-3.5h10v-2H7zM3 21V3h18v18zm10.725-5.55Q14.5 14.9 14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45T12 16t1.725-.55");
}
</style><path class="f7h67unxa"/>`,
		"fallback": "material-symbols:inbox-text-sharp",
	});
}

export default Component;
