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
		"content": `<style>.r4-_9pz6a {
  fill: currentColor;
  d: path("M3 4.5A1.5 1.5 0 0 1 4.5 3h19A1.5 1.5 0 0 1 25 4.5v2A1.5 1.5 0 0 1 23.5 8h-19A1.5 1.5 0 0 1 3 6.5zm1 5h20v10.75A4.75 4.75 0 0 1 19.25 25H8.75A4.75 4.75 0 0 1 4 20.25zm7.75 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="r4-_9pz6a"/>`,
		"fallback": "fluent:archive-28-filled",
	});
}

export default Component;
