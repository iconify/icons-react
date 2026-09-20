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
		"content": `<style>.osvupob-f {
  fill: currentColor;
  d: path("M5.5 20.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5.5 12a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-17-8.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4");
}
</style><path class="osvupob-f"/>`,
		"fallback": "fluent:grid-dots-28-regular",
	});
}

export default Component;
