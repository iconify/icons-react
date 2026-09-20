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
		"content": `<style>.mt8tl1b7j {
  fill: currentColor;
  d: path("M1.5 20.5v-11h1v2h3v-8h1v2h3v-2h1v2h3v-2h1v2h3v-2h1v8h3v-2h1v11h-8v-5h-5v5zm8-9h1V9.308h-1zm4 0h1V9.308h-1z");
}
</style><path class="mt8tl1b7j"/>`,
		"fallback": "material-symbols-light:castle-sharp",
	});
}

export default Component;
