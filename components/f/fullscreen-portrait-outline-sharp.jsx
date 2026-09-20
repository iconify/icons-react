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
		"content": `<style>.r83z8fr5o {
  fill: currentColor;
  d: path("M8 18h8V6H8zm12 4H4V2h16zm-2-2V4H6v16zm0-16H6z");
}
</style><path class="r83z8fr5o"/>`,
		"fallback": "material-symbols:fullscreen-portrait-outline-sharp",
	});
}

export default Component;
