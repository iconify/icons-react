import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i22ovsbjh {
  fill: currentColor;
  d: path("M3 4.5A1.5 1.5 0 0 1 4.5 3a.5.5 0 0 0 0-1A2.5 2.5 0 0 0 2 4.5a.5.5 0 0 0 1 0M2.5 11a.5.5 0 0 1 .5.5A1.5 1.5 0 0 0 4.5 13a.5.5 0 0 1 0 1A2.5 2.5 0 0 1 2 11.5a.5.5 0 0 1 .5-.5m11.5.5a.5.5 0 0 0-1 0a1.5 1.5 0 0 1-1.5 1.5a.5.5 0 0 0 0 1a2.5 2.5 0 0 0 2.5-2.5m-3-9a.5.5 0 0 1 .5-.5A2.5 2.5 0 0 1 14 4.5a.5.5 0 0 1-1 0A1.5 1.5 0 0 0 11.5 3a.5.5 0 0 1-.5-.5m-2.5 2a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3zm-2-2A.5.5 0 0 1 7 2h2a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5M2 9a.5.5 0 0 0 1 0V7a.5.5 0 0 0-1 0zm4.5 4.5A.5.5 0 0 1 7 13h2a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5M13 9a.5.5 0 0 0 1 0V7a.5.5 0 0 0-1 0z");
}
</style><path class="i22ovsbjh"/>`,
		"fallback": "fluent:border-inside-16-regular",
	});
}

export default Component;
