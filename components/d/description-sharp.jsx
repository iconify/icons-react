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
		"content": `<style>.h8qu4kb_r {
  fill: currentColor;
  d: path("M8.5 17.5h7v-1h-7zm0-4h7v-1h-7zM5 21V3h9.5L19 7.5V21zm9-13h4l-4-4z");
}
</style><path class="h8qu4kb_r"/>`,
		"fallback": "material-symbols-light:description-sharp",
	});
}

export default Component;
