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
		"content": `<style>.axc9lwmka {
  fill: currentColor;
  d: path("m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z");
}
</style><path class="axc9lwmka"/>`,
		"fallback": "material-symbols:arrow-back",
	});
}

export default Component;
