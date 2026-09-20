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
		"content": `<style>.nmmso4q5h {
  fill: currentColor;
  d: path("M2 22v-2h20v2zm8.5-4V4h3v14z");
}
</style><path class="nmmso4q5h"/>`,
		"fallback": "material-symbols:align-flex-end-outline-sharp",
	});
}

export default Component;
