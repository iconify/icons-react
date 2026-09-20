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
		"content": `<style>.k3kno6boz {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4v-2h2.5v2zm4 0V7h10v10zm11.5 0v-2H21v2zM3 13v-2h2.5v2zm15.5 0v-2H21v2zM3 9V7h2.5v2zm15.5 0V7H21v2zM3 5V3h18v2z");
}
</style><path class="k3kno6boz"/>`,
		"fallback": "material-symbols:format-image-front-sharp",
	});
}

export default Component;
