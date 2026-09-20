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
		"content": `<style>.pf6lw9xye {
  fill: currentColor;
  d: path("M19 8.712L22.288 12L19 15.288l-.713-.713l2.1-2.075H14.5v3h-1v-4h6.887l-2.095-2.1zM2 17V7h15.329l-1.02 1H3v8h8.116v1zm1-1V8z");
}
</style><path class="pf6lw9xye"/>`,
		"fallback": "material-symbols-light:battery-android-share-outline-sharp",
	});
}

export default Component;
