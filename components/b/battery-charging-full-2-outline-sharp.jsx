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
		"content": `<style>.cwsb0xbtz {
  fill: currentColor;
  d: path("M2 17V7h14.25l-1.6 2H4v6h11l-.35 2zm14.675 0l.7-4H14l4.8-6h.525l-.7 4H22l-4.8 6zM4 15V9z");
}
</style><path class="cwsb0xbtz"/>`,
		"fallback": "material-symbols:battery-charging-full-2-outline-sharp",
	});
}

export default Component;
