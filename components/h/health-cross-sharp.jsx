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
		"content": `<style>.blc490buo {
  fill: currentColor;
  d: path("M8.673 20v-4.673H4V8.692h4.673V4h6.635v4.692H20v6.635h-4.692V20z");
}
</style><path class="blc490buo"/>`,
		"fallback": "material-symbols-light:health-cross-sharp",
	});
}

export default Component;
