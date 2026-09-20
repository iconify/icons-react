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
		"content": `<style>.s1qw01bzr {
  fill: currentColor;
  d: path("M6 20V10h1v9h9v1zm4-3.98v-10h1v9h9v1z");
}
</style><path class="s1qw01bzr"/>`,
		"fallback": "material-symbols-light:arrows-more-down-sharp",
	});
}

export default Component;
