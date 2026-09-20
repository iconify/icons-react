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
		"content": `<style>.s94swzbfk {
  fill: currentColor;
  d: path("M14.5 16.5h4v-4h-1v3h-3zm-9-5h1v-3h3v-1h-4zM3 19V5h18v14z");
}
</style><path class="s94swzbfk"/>`,
		"fallback": "material-symbols-light:aspect-ratio-sharp",
	});
}

export default Component;
