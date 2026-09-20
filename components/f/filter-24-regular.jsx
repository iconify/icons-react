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
		"content": `<style>.tmc3hfymh {
  fill: currentColor;
  d: path("M13.5 16a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zm3-5a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5zm3-5a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1 0-1.5z");
}
</style><path class="tmc3hfymh"/>`,
		"fallback": "fluent:filter-24-regular",
	});
}

export default Component;
