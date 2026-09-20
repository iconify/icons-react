import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kel5sp8uc {
  fill: currentColor;
  d: path("M3.5 2A1.5 1.5 0 0 0 2 3.5v10A1.5 1.5 0 0 0 3.5 15H7v2H5.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H13v-2h3.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 16.5 2zM12 15v2H8v-2z");
}
</style><path class="kel5sp8uc"/>`,
		"fallback": "fluent:desktop-20-filled",
	});
}

export default Component;
