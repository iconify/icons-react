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
		"content": `<style>.kxbo5yc3e {
  fill: currentColor;
  d: path("M6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-4V4zm7.5-1.5h1v-9h-1v4h-3v-4h-1v5h4z");
}
</style><path class="kxbo5yc3e"/>`,
		"fallback": "material-symbols-light:filter-4-outline-sharp",
	});
}

export default Component;
