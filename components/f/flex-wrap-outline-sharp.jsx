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
		"content": `<style>.otoq3qbjd {
  fill: currentColor;
  d: path("M1 22v-9h6v9zm8 0v-9h6v9zm8 0v-9h6v9zm-6-2h2v-5h-2zM1 11V2h6v9zm8 0V2h6v9zm8 0V2h6v9zM3 9h2V4H3zm16 0h2V4h-2z");
}
</style><path class="otoq3qbjd"/>`,
		"fallback": "material-symbols:flex-wrap-outline-sharp",
	});
}

export default Component;
