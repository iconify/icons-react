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
		"content": `<style>.rcc63cbuv {
  fill: currentColor;
  d: path("m10 14l6-4l-6-4zm-8 8V2h20v16H6z");
}
</style><path class="rcc63cbuv"/>`,
		"fallback": "material-symbols:auto-read-play-sharp",
	});
}

export default Component;
