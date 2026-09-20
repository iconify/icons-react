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
		"content": `<style>.l3qw1bsqa {
  fill: currentColor;
  d: path("M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M6.25 7.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m3.5 0a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.118 3.322a.5.5 0 1 0 .764-.644c-1.325-1.57-3.94-1.57-5.264 0a.5.5 0 1 0 .764.644c.925-1.096 2.81-1.096 3.736 0");
}
</style><path class="l3qw1bsqa"/>`,
		"fallback": "fluent:emoji-sad-16-filled",
	});
}

export default Component;
