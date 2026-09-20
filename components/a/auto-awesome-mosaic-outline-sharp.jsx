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
		"content": `<style>.kzxh6ub8g {
  fill: currentColor;
  d: path("M11 21H3V3h8zm-2-2V5H5v14zm4-8V3h8v8zm2-2h4V5h-4zm-2 12v-8h8v8zm2-2h4v-4h-4zm0-4");
}
</style><path class="kzxh6ub8g"/>`,
		"fallback": "material-symbols:auto-awesome-mosaic-outline-sharp",
	});
}

export default Component;
