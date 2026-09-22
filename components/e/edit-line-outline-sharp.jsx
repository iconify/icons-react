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
		"content": `<style>.j0rig9bpy {
  fill: currentColor;
  d: path("M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25l14.625-14.6l4.2 4.275L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225zM10.05 21l2-2H22v2z");
}
</style><path class="j0rig9bpy"/>`,
		"fallback": "material-symbols:edit-line-outline-sharp",
	});
}

export default Component;
