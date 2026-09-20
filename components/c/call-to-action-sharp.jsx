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
		"content": `<style>.gx8g11bpy {
  fill: currentColor;
  d: path("M6.5 16.5h11v-2h-11zM3 19V5h18v14z");
}
</style><path class="gx8g11bpy"/>`,
		"fallback": "material-symbols-light:call-to-action-sharp",
	});
}

export default Component;
