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
		"content": `<style>.ddjxd7byt {
  fill: currentColor;
  d: path("M20.659 9.247c.217.19.341.465.341.753v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0ZM16 19a1 1 0 0 0 .992-1.124l-1-8A1 1 0 0 0 15 9H9a1 1 0 0 0-.992.876l-1 8A.997.997 0 0 0 8 19Zm-5-8v2H9.633l.25-2Zm2 2v-2h1.117l.25 2Zm-2 2v2H9.133l.25-2Zm2 2v-2h1.617l.25 2Z");
}
</style><path class="ddjxd7byt"/>`,
		"fallback": "coolicons:house-solar-panel-fill-sharp",
	});
}

export default Component;
