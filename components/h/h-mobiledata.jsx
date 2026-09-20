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
		"content": `<style>.ih3eoqb-u {
  fill: currentColor;
  d: path("M7.5 17V7h1v4.5h7V7h1v10h-1v-4.5h-7V17z");
}
</style><path class="ih3eoqb-u"/>`,
		"fallback": "material-symbols-light:h-mobiledata",
	});
}

export default Component;
