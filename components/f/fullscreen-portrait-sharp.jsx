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
		"content": `<style>.y353gab5e {
  fill: currentColor;
  d: path("M8 18h8V6H8zm12 4H4V2h16z");
}
</style><path class="y353gab5e"/>`,
		"fallback": "material-symbols:fullscreen-portrait-sharp",
	});
}

export default Component;
