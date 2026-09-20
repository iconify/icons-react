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
		"content": `<style>.krct6gfoo {
  fill: currentColor;
  d: path("m14 17l-5-5l5-5z");
}
</style><path class="krct6gfoo"/>`,
		"fallback": "material-symbols:arrow-left-outline-sharp",
	});
}

export default Component;
