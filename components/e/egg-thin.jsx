import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.air__moix {
  fill: currentColor;
  d: path("M128 20c-35.13 0-84 66.52-84 132a84 84 0 0 0 168 0c0-65.48-48.87-132-84-132m0 208a76.08 76.08 0 0 1-76-76c0-28.46 10-59.73 27.33-85.78C94.81 43 113.91 28 128 28s33.19 15 48.67 38.22C194 92.27 204 123.54 204 152a76.08 76.08 0 0 1-76 76");
}
</style><path class="air__moix"/>`,
		"fallback": "ph:egg-thin",
	});
}

export default Component;
