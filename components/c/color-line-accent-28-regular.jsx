import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fgaa-1dri {
  fill: currentColor;
  d: path("M22.251 18.5a2.25 2.25 0 0 1 2.25 2.25v1.5a2.25 2.25 0 0 1-2.25 2.25H5.754a2.25 2.25 0 0 1-2.25-2.25v-1.5a2.25 2.25 0 0 1 1.538-2.134c.07.325.229.63.47.871a1.75 1.75 0 0 0 1.626.47l4.938-1.123q.475-.11.902-.334z");
}
</style><path class="fgaa-1dri"/>`,
		"fallback": "fluent:color-line-accent-28-regular",
	});
}

export default Component;
