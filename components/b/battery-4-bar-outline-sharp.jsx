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
		"content": `<style>.nd16z6bmy {
  fill: currentColor;
  d: path("M9 12h6V6H9zM7 22V4h3V2h4v2h3v18z");
}
</style><path class="nd16z6bmy"/>`,
		"fallback": "material-symbols:battery-4-bar-outline-sharp",
	});
}

export default Component;
